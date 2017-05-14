import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectSaving} from '../actions/index';
import {createSaving} from '../actions/index';
import {deleteSaving} from '../actions/index';
import {Field, reduxForm} from 'redux-form';
import SavingForm from './savings-form';

class SavingsList extends Component {

    submit(values){
        console.log(values);
    }

    renderList() {
        return this.props.savings.map((saving) => {
            return (
                <div key={saving.id}>
                    <li onClick={() => this.props.selectSaving(saving)} >
                        {saving.type} @ ${saving.amount} / {saving.frequency}
                    </li>
                    <div className = {this.props.activeSaving != null && this.props.activeSaving.id == saving.id ? 'active': 'inactive'}>
                        <SavingForm form={saving.id} savingData={saving} onSubmit={this.submit}></SavingForm>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <ul className="navList">
                <li> Your Savings <i className="fa fa-money"></i> </li>
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
        activeSaving: state.activeSaving
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectSaving: selectSaving, 
        createSaving: createSaving,
        deleteSaving: deleteSaving
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(SavingsList);
