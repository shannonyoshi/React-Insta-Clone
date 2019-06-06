import React from "react";
import styled from "styled-components";
import { Input } from "../JSstyles";
import { UserPic } from "../JSstyles";
import { Button } from '../JSstyles'; 

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  align-items: center;
  border: 1px solid lightgray;
  margin:20vh auto;
  box-shadow: 0px 0px 5px lightgray;
`;

const BgDiv = styled.div`
  background-color: rgba(245,245,245,.7)`;


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
        <FormWrapper onSubmit={this.loginUser}>
          <h2>Log In to Insta Clone</h2>
          <UserPic src="../../shannon.JPG" alt="Shannon profile pic" large />
          <Input mediumWide
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChanges}
            value={this.state.username}
          />
          <Input mediumWide
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChanges}
            value={this.state.password}
          />
          <Button>Log In</Button>
        </FormWrapper>
    );
  }
}

export default Login;
