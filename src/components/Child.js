import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Simulate a login process here, you can add your own logic
    // For now, let's just assume the login is successful
    this.props.onLogin();
  }

  render() {
    return (
      <div className="child">
      
        <form onSubmit={this.handleSubmit}>
          <label >
            Username:
            <input className="in"type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </label>
          <br />
          <label >
            Password:
            <input className="in" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Child;
