import React, { Component } from "react";

export default class User extends Component {
  render() {
    const {id,name,email} =this.props
    return (
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td><button className="btn btn-danger">Danger</button></td>
        </tr>
    );
  }
}
