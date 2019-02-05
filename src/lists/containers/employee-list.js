import React, { PureComponent } from "react";
import EmployeeItem from "../components/employeeItem";
import Axios from "axios";

export default class EmployeeListC extends PureComponent {
  state = {
    employees: []
  };

  componentDidMount = () => {
    Axios.get("https://localhost:5001/api/employee")
      .then(resp => {
        // console.log(resp.data);
        this.setState({
          employees: resp.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { employees } = this.state;
    return (
      <div>
        <h1>Employee List...</h1>
        <h3 onClick={this.props.handleClick}>Create a new employee</h3>
        {employees.map(employee => (
          <EmployeeItem key={employee.id} {...employee} handleOpenModal={this.props.handleOpenUpdateClick} />
        ))}
      </div>
    );
  }
}
