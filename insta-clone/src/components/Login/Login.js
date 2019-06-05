import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  loginUser = e => {
    localStorage.setItem("user", JSON.stringify(this.state.username));
    window.location.reload();
  };

  render() {
    return (
      <form onSubmit={this.loginUser}>
        <h1>Log In to Insta Clone</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.handleChanges}
          value={this.state.username}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={this.handleChanges}
          value={this.state.password}
        />
        <button>Log In</button>
      </form>
    );
  }
}

export default Login;
