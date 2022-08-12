import React, { Component } from "react";
import AddUser from "./Components/AddUser";
import User from "./Components/User";
import Users from "./Components/Users";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [
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
        
        <AddUser/>
        <Users accounts={this.state.accounts}/>
      </div>
    );
  }
}
