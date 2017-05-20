import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const required = value => value ? undefined : 'Required';

const maxAmount = value => parseInt(value) <= 0 || parseInt(value) > 1000000 ? 'Minimum of 0, maximum of 1000000.' : undefined;

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class SavingForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">Saving Type</label>
          <Field name="type" component={renderField} validate={[ required ]} type="text"/>
        </div>
        <div>
          <label htmlFor="amount">Saving Amount</label>
          <Field name="amount" component={renderField} validate={[ required, maxAmount ]} type="text"/>
        </div>
        <div>
          <label htmlFor="frequency">Saving Frequency</label>
            <Field name="frequency" component="select">
              <option value={365}>Daily</option>
              <option value={52}>Weekly</option>
              <option value={12}>Monthly</option>
              <option value={4}>Quarterly</option>
              <option value={2}>Semi-Anually</option>
              <option value={1}>Anually</option>
          </Field>
        </div>
        <button type="submit"><i className="fa fa-check"/>Update</button>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    initialValues: ownProps.savingData
  }
}

// Decorate the form component
SavingForm = reduxForm({
  form: 'savingForm'
})(SavingForm);

export default connect(mapStateToProps)(SavingForm);