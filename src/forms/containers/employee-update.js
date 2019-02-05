import React, { Component } from "react";
import Axios from "axios";
import EmployeeFormUpdate from "../components/employee-update";

class EmployeeUpdate extends Component {
  state = {
    employee: {}
  };

  handleUpdateName = () => {
    alert("handleUpdateName");
  };

  handleUpdateNumber = () => {
    alert("handleUpdateNumber");
  };

  handleSubmit = event => {
    alert("test");
    debugger;
    Axios.put(`https://localhost:5001/api/employee/${this.props.employee.id}`)
      .then(resp => {
        // console.log(resp.data);
        this.setState({ employee: resp.data });
      })
      .catch(error => {
        console.log(error);
      });
    event.preventDefault();
  };

  componentDidMount = () => {
    // console.log("employee componentDidMount", this.props);
    Axios.get(`https://localhost:5001/api/employee/${this.props.employee.id}`)
      .then(resp => {
        //console.log(resp.data);
        // console.log(resp.status);
        // console.log(resp.statusText);
        this.setState({ employee: resp.data });
      })
      .catch(function(error) {
        // Handle Error
        console.log(error);
      });
  };
  render() {
    const { employee } = this.state;
    return (
      <div>
        <EmployeeFormUpdate
          handleUpdateName={this.props.handleUpdateName}
          handleUpdateNumber={this.props.handleUpdateNumber}
          key={employee.id}
          {...employee}
        />
      </div>
    );
  }
}
export default EmployeeUpdate;
