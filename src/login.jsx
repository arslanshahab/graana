import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  componentDidMount() {
    console.log("did mount called");
  }

  componentDidUpdate() {
    console.log("did update called");
  }

  shouldComponentUpdate() {
    console.log("should update called");
    return true
  }

  componentWillUnmount() {
    console.log("will unmount called");
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    console.log("render called");
    return (
      <div>
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <input
          type="text"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
      </div>
    );
  }
}

export default Login;
