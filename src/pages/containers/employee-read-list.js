import React, { Component } from "react";
import axios from "axios";

class EmployeeReadList extends Component {
  state = {
    employees: []
  };

  handleUpdateClick = event => {
    debugger;
    alert("its Work");
    // this.setState({});
    // this.props.handleOpenUpdateClick(this.props);
    // console.log(this.props.handleOpenUpdateClick(this.props));
  };

  componentDidMount = () => {
    /* fetch("https://localhost:5001/api/employee/")
          .then(r => r.json())
          .then(response => {
            console.log(response);
            this.setState({ items: response });
          }); */
    axios
      .get("https://localhost:5001/api/employee")
      .then(resp => {
        // console.log(resp.data);
        // console.log(resp.status);
        // console.log(resp.statusText);
        this.setState({ employees: resp.data });
      })
      .catch(function(error) {
        // Handle Error
        console.log(error);
      });
  };

  render() {
    const { employees } = this.state;
    return (
      <div>
        <h4 onClick={this.props.handleClick}>Create new user</h4>
        <h3>Employee List...</h3>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.id} | {employee.name} | {employee.employeeNumber} --
            <button onClick={this.props.handleUpdateClick} key={employee.id}>
              Update
            </button>
            --
            <button>Delete</button>
          </li>
        ))}
      </div>
    );
  }
}
export default EmployeeReadList;
