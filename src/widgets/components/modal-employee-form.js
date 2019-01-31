import React from "react";
import "./modal.css";
import EmployeeForm from "../../forms/components/employee-form";

function ModalEmployeeForm(props) {
  return (
    <div className="Modal">
      Esto es un modal
      {props.children}
      <EmployeeForm />
      <button onClick={props.handleClick}>Cerrar</button>
    </div>
  );
}
export default ModalEmployeeForm;
