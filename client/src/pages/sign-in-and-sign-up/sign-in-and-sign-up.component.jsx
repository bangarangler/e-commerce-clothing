import React from 'react';

import SignIn from '../../components/sign-in/sign-in.components.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';

import './sing-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
