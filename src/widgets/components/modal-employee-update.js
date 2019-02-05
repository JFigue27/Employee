import React from "react";
import "./modal.css";
import EmployeeUpdate from "../../forms/containers/employee-update";

function ModalUpdate(props) {
  return (
    <div className="Modal">
      Esto es un modal para Update
      {props.children}
      <h1>Aqui va la forma con la data del empleado a editar.</h1>
      <EmployeeUpdate {...props} />
      <button onClick={props.handleClick}>Cerrar</button>
    </div>
  );
}
export default ModalUpdate;
