import React, {Component, Fragment} from 'react';

import {SubmissionError} from 'redux-form';
import 'react-redux';
import 'redux';

import LoginForm from './components/LoginForm';

class App extends Component {
  submit = inputs => {
    if (['rajat', 'batman'].includes (inputs.username)) {
      throw new SubmissionError ({
        username: 'Username already taken',
      });
    } else {
      window.alert (JSON.stringify (inputs));
    }
  };

  getInitialValues () {
    return {
      username: 'rajat',
      password: '',
    };
  }
  render () {
    return (
      <Fragment>
        <h1>Geeky Form</h1>
        <LoginForm
          onSubmit={this.submit}
          initialValues={this.getInitialValues ()}    // Form init value
        />
      </Fragment>
    );
  }
}

export default App;