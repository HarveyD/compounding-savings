import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SavingForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">Saving Type</label>
          <Field name="type" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="amount">Saving Amount</label>
          <Field name="amount" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="frequency">Saving Frequency</label>
          <Field name="frequency" component="input" type="text"/>
        </div>
        <button type="submit"><i className="fa fa-tick"/>Submit</button>
      </form>
    );
  }
}

// Decorate the form component
SavingForm = reduxForm({
  form: 'contact' // a unique name for this form
})(SavingForm);

export default SavingForm;