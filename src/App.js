import React, { Component } from "react";
import AddUser from "./Components/AddUser";
import User from "./Components/User";
import Users from "./Components/Users";


export default class App extends Component {



 
  constructor(props) {
    super(props);
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
    this.deleteUser = this.deleteUser.bind(this)

  }
  deleteUser(id){
    let updatedUsers= this.state.users
    updatedUsers=updatedUsers.filter(user => user.id !== id)
    //state direct ımutable
    this.setState({
      users:updatedUsers
    })

  }
  
  render() {
    const appName = "User Listing";
    return (
      <div className="container">
        <hr />
        {appName} 
        <hr />
        
        <AddUser/>
        <hr />
        <Users deleteUser={this.deleteUser} users={this.state.users}/>
        <hr />
      </div>
    );
  }
}
