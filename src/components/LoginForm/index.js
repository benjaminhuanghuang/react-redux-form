import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

import {MyInput} from '../Field';
import {validate} from '../../validation';

class LoginForm extends Component {
  render () {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          component={MyInput}
          type="text"
          placeholder="Username"
        />
        <Field
          name="password"
          component={MyInput}
          type="password"
          placeholder="Password"
        />
        <button type="submit" label="submit">Submit</button>
      </form>
    );
  }
}

LoginForm = reduxForm ({
  form: 'login',
  validation
}) (LoginForm);

export default LoginForm;