import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''});
  };

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  };

  render() {
    return (
      <div class="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <label>EMAIL</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <label>PASSWORD</label>
          <input type="submit" value="Submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
