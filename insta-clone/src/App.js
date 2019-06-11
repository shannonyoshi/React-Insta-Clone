import React from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import { WithAuthenticate } from "./components/Authentication/withAuthenticate";
import Login from "./components/Login/Login";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}
const ComponentFromWithAuthenticate = WithAuthenticate(PostsPage)(Login);

export default App;
