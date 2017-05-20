import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const required = value => value ? undefined : 'Required';
const isNumber = value => isNaN(Number(value)) ? 'Must be a number.' : undefined;
const interestRate = value => parseFloat(value) <= 0 || parseFloat(value) > 1 ? 'Must be between 1 and 0.' : undefined;

const maxYears = value => parseInt(value) <= 0 || parseInt(value) > 50 ? 'Maximum of 50 years shown.' : undefined;

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class SettingsForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="interestRate">Interest Rate</label>
          <Field name="interestRate" component={renderField} validate={[ required, isNumber, interestRate ]} type="text"/>
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
          <Field name="yearsShown" component={renderField} validate={[ required, maxYears ]} type="text"/>
        </div>
        {/*<div>
          <label htmlFor="amount">Combine Savings</label>
          <Field name="amount" component="input" type="text"/>
        </div>*/}
        <button type="submit" disabled={submitting}><i className="fa fa-check"/>Update</button>
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