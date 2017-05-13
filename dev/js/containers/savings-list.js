import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectSaving} from '../actions/index'


class SavingsList extends Component {

    renderList() {
        return this.props.savings.map((saving) => {
            return (
                <div key={saving.id}>
                    <li onClick={() => this.props.selectSaving(saving)} >
                        {saving.savingType} | {saving.investment} | {saving.amount}
                    </li>
                    <div className = {this.props.activeSaving != null && this.props.activeSaving.id == saving.id ? 'active': 'inactive'}>
                        <p> Hello </p>
                        <p> Forms will go here. </p>
                        <button> Save </button>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <ul className="navList">
                {this.renderList()}
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
    return bindActionCreators({selectSaving: selectSaving}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(SavingsList);
