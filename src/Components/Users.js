import React, { Component } from "react";
import User from "./User";
export default class Users extends Component {
  render() {
    const {users , deleteUser} = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map (user=>{
                    const {id,name,email} =user
                    return<User key={id}
                    id ={id}
                    name={name}
                    email={email}
                    deleteUser={deleteUser}
                    />
                })
            }

          </tbody>  
        </table>
      </div>
    );
  }
}
