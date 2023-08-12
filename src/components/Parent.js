import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    return (
      <div className="parent">
        <h1>Parent Component</h1>
        {this.state.isLoggedIn ? (
          <p>You are logged in!</p>
        ) : (
          <Child isLoggedIn={this.state.isLoggedIn} onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default Parent;
