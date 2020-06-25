import React from 'react';
import Input from '../Forms/Input';
import ErrorMessage from '../Forms/ErrorMessage';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      errMsg: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value, errMsg: '' })
  }

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value, errMsg: '' })
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } else {
          this.setState({ errMsg: 'Email or password is incorrect.' })
        }
      })
  }

  render() {
    const { onEmailChange, onPasswordChange, onSubmitSignIn } = this;
    return (
      <div className="card bg-dark mx-auto py-5 px-4 shadow border border-secondary mt-md-5 mt-5" style={{ maxWidth: "370px" }}>
        <h1 className="text-center text-info">SIGN IN</h1>
        <hr />
        <Input type="email" className="form-control bg-dark border border-secondary text-secondary" event={onEmailChange} name="Email" />
        <Input type="password" className="form-control bg-dark border border-secondary text-secondary" event={onPasswordChange} name="Password" />
        <ErrorMessage errMsg={this.state.errMsg} />
        <Input type="button" className="btn btn-info mx-auto d-block mt-3" event={onSubmitSignIn} name="Signin" />
      </div>
    );
  }
}

export default Signin;