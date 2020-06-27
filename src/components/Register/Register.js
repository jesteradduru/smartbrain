import React from 'react';
import Input from '../Forms/Input';
import ErrorMessage from '../Forms/ErrorMessage';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      errMsg: ''
    }
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value, errMsg: '' })
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value, errMsg: '' })
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value, errMsg: '' })
  }

  onSubmitSignIn = () => {
    fetch('https://nameless-anchorage-36091.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        } else {
          this.setState({ errMsg: 'Make sure to fill up all fields.' });
        }
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="card bg-dark mx-auto py-5 px-4 shadow border border-secondary mt-md-5 my-5" style={{ maxWidth: "370px" }}>
        <h1 className="text-center text-info">REGISTER</h1>
        <hr />
        <Input type="text" className="form-control bg-dark border border-secondary text-secondary" event={this.onNameChange} name="Name" />
        <Input type="email" className="form-control bg-dark border border-secondary text-secondary" event={this.onEmailChange} name="Email" />
        <Input type="password" className="form-control bg-dark border border-secondary text-secondary" event={this.onPasswordChange} name="Password" />
        <ErrorMessage errMsg={this.state.errMsg} />
        <Input type="button" className="btn btn-info mx-auto d-block mt-3" event={this.onSubmitSignIn} name="Register" />
      </div>
    );
  }
}

export default Register;