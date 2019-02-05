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
        {this.props.children}
      </div>
    );
  }
}

export default EmployeeForm;
