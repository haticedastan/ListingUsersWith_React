import React, { Component } from 'react'

export default class AddUser extends Component {
 
  render() {
    
    return (
      <div>
        <form>
        <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="name" className="form-control" id="name" placeholder="Enter name"/>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email"/>
  </div>

  <button type="submit" className="btn btn-primary btn-block">Add New User</button>
</form>
      </div>
    )
  }
}
