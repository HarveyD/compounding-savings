import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class SettingsForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="interestRate">Interest Rate</label>
          <Field name="interestRate" component="input" validate={interestRate} type="text"/>
        </div>
        <div>
          <label htmlFor="compoundingFrequency">Compounding Frequency</label>
            <Field name="compoundingFrequency" component="select">
              <option value={365}>Daily</option>
              <option value={52}>Weekly</option>
              <option value={12}>Monthly</option>
              <option value={4}>Quarterly</option>
              <option value={2}>Semi-Anually</option>
              <option value={1}>Anually</option>
          </Field>
        </div>
        <div>
          <label htmlFor="yearsShown">Years Shown</label>
          <Field name="yearsShown" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="amount">Combine Savings</label>
          <Field name="amount" component="input" type="text"/>
        </div>
        <button type="submit"><i className="fa fa-check"/>Update</button>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    initialValues: ownProps.settingsData
  }
}

// Decorate the form component
SettingsForm = reduxForm({
  form: 'settingsForm'
})(SettingsForm);

export default connect(mapStateToProps)(SettingsForm);