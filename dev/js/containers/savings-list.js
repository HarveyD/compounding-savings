import React, {Component} from 'react';
import {connect} from 'react-redux';

import { bindActionCreators } from 'redux';
import { selectSaving } from '../actions/index';
import { createSaving } from '../actions/index';
import { updateSaving } from '../actions/index';
import { deleteSaving } from '../actions/index';

import { toggleSettings } from '../actions/index';
import { updateSettings } from '../actions/index';

import {Field, reduxForm} from 'redux-form';
import SavingForm from './savings-form';
import SettingsForm from './settings-form';

class SavingsList extends Component {
    renderList() {
        return this.props.savings.map((saving) => {
            return (
                <div key={saving.id}>
                    <li onClick={() => this.props.selectSaving(saving)}>
                        {saving.type ? (
                            `${saving.type} @ \$${saving.amount} / ${saving.frequency}`
                        ): (
                            'Empty Saving'
                        )}
                        <a onClick={() => this.props.deleteSaving(saving)} className="delete"> <i className="fa fa-times"/> </a>
                    </li>
                    <div className = {this.props.activeSaving != null && this.props.activeSaving.id == saving.id ? 'active': 'inactive'}>
                        <SavingForm form={''+saving.id} savingData={saving} onSubmit={(values) => this.props.updateSaving(values)}></SavingForm>
                    </div>
                </div>
            );
        });
    }

    renderSettings(){
        return (
            <div>
                <li onClick = {() => this.props.toggleSettings()}> Settings <i className="fa fa-gear"></i> </li>
                <div className= {this.props.settings.active ? 'active': 'inactive'}>
                    <SettingsForm onSubmit={(settings) => this.props.updateSettings(settings)} settingsData={this.props.settings}> </SettingsForm>
                </div>
            </div>
        )
    }

    render() {
        return (
            <ul className="navList">
                {this.renderSettings()}
                <br/>
                    {this.renderList()}
                <br/>
                <li onClick={() => this.props.createSaving()}> Add Saving <i className="fa fa-plus"></i></li>
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        savings: state.savings,
        settings: state.settings,
        activeSaving: state.activeSaving
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectSaving: selectSaving, 
        createSaving: createSaving,
        updateSaving: updateSaving,
        deleteSaving: deleteSaving,
        updateSettings: updateSettings,
        toggleSettings: toggleSettings
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(SavingsList);
