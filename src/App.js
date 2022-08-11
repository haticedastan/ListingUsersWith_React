import React, { Component } from "react";
import AddUser from "./Components/AddUser";
import Users from "./Components/Users";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 1,
          name: "hatice daştan",
          email: "dastanhaticee@gmail.com",
        },
        {
          id: 2,
          name: "aslı kurt",
          email: "asli@gmail.com",
        },
        {
          id: 3,
          name: "hilal pişkin",
          email: "hilal@gmail.com",
        },
      ],
    };
  }
  render() {
    const appName = "User Listing";
    return (
      <div className="container">
        {appName}
        <hr />
        <AddUser/>
        <Users/>
      </div>
    );
  }
}
