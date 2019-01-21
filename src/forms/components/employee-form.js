import React, { Component } from "react";

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    alert("A name was submit: " + this.state.value);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        test
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Employee Name" />
          </label>
          <button value="submit">submit</button>
        </form>
      </div>
    );
  }
}
export default EmployeeForm;
