import React from "react";

const EmployeeFormUpdate = props => (
  <div>
    {props.children}
    <p>
      {props.name} | {props.employeeNumber}
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>ID: </label>
          <input type="text" value={props.id} placeholder="Employee Id" />
        </div>
        <br />
        <div>
          <label>Name: </label>
          <input type="text" value={props.name} onChange={props.handleUpdateName} placeholder="Employee Name" />
        </div>
        <br />
        <div>
          <label>Employee Number: </label>
          <input type="text" value={props.employeeNumber} onChange={props.handleUpdateNumber} placeholder="Employee Number" />
        </div>
        <br />
        <button value="submit">submit</button>
      </form>
    </p>
  </div>
);

export default EmployeeFormUpdate;
