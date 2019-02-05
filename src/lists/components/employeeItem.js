import React, { PureComponent } from "react";

// class EmployeeItem extends PureComponent {
//   openModal = () => {
//     this.props.handleOpenModal(this.props);
//   };
//   render() {
//     return (
//       <div>
//         <h5>
//           {this.props.id} | {this.props.name} | {this.props.employeeNumber} --
//           <button onClick={this.openModal}>Update</button> --
//           <button>Delete</button>
//         </h5>
//       </div>
//     );
//   }
// }

const EmployeeItem = props => {
  const openModal = () => props.handleOpenModal(props);
  return (
    <div>
      <h5>
        {props.id} | {props.name} | {props.employeeNumber} --
        <button onClick={openModal}>Update</button> --
        <button>Delete</button>
      </h5>
    </div>
  );
};

export default EmployeeItem;
