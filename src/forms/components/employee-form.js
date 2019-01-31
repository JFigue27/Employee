import React, { Component } from "react";
import axios from "axios";

class EmployeeForm extends Component {
  state = {
    employees: []
  };

  handleChangeId = event => {
    this.setState({
      id: event.target.value
    });
  };
  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleChangeNumber = event => {
    this.setState({
      number: event.target.value
    });
  };

  handleSubmit = event => {
    alert("A name was submit: " + this.state.name);
    // Create a new user....
    axios
      .post("https://localhost:5001/api/employee", {
        id: this.state.id,
        name: this.state.name,
        employeeNumber: this.state.number
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    // Create a new user
    /* fetch("https://localhost:5001/api/employee", {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        id: 2,
        name: "Jaime Abraham Figueroa Gonzalez",
        employeeNumber: 17652
      })
    }); */

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>Employee Info</h3>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>ID: </label>
            <input type="text" value={this.state.employees.id} onChange={this.handleChangeId} placeholder="Employee Id" />
          </div>
          <br />
          <div>
            <label>Name: </label>
            <input type="text" value={this.state.employees.name} onChange={this.handleChangeName} placeholder="Employee Name" />
          </div>
          <br />
          <div>
            <label>Employee Number: </label>
            <input type="text" value={this.state.employees.number} onChange={this.handleChangeNumber} placeholder="Employee Number" />
          </div>
          <br />
          <button value="submit">submit</button>
        </form>
      </div>
    );
  }
}
export default EmployeeForm;
