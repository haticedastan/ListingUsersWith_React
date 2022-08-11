import React, { Component } from "react";

export default class AddUser extends Component {
  render() {
    const appName = "Add User";
    return (
      <div className="card">
        <h4 className="card-header">Add new user</h4>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="form-control"
              ></input>
            </div>
            <button type="submit" className="btn btn-danger btn-block"> Add New User</button>
          </form>
        </div>
      </div>
    );
  }
}
