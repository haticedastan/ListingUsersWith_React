import React, { Component } from 'react'

export default class AddUser extends Component {
  render() {
    return (
      <div>
        <form>
        <div class="form-group">
    <label for="name">Name</label>
    <input type="name" class="form-control" id="name" placeholder="Enter name"/>
  </div>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email"/>
  </div>

  <button type="submit" class="btn btn-primary btn-block">Add New User</button>
</form>
      </div>
    )
  }
}
