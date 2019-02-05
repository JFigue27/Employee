import React, { Component } from "react";
import EmployeeReadList from "./pages/containers/employee-read-list";
import ModalContainer from "./widgets/containers/modal";
import Modal from "./widgets/components/modal-employee-form";
import AppLayout from "./pages/components/App-Layout";
import ModalUpdate from "./widgets/components/modal-employee-update";
import "./App.css";
import EmployeeList from "./lists/containers/employee-list";

class App extends Component {
  state = {
    modalVisible: false,
    modalUpdate: false
  };

  handleOpenModal = () => {
    this.setState({
      modalVisible: true
    });
  };
  handleCloseModal = () => {
    this.setState({
      modalVisible: false
    });
  };

  handleOpenUpdateClick = employee => {
    // console.log(employee);
    this.setState({
      modalUpdate: true,
      employee
    });
  };

  handleCloseUpdateClick = () => {
    this.setState({
      modalUpdate: false
    });
  };

  render() {
    return (
      <div className="App">
        <AppLayout />
        <EmployeeList handleClick={this.handleOpenModal} handleOpenUpdateClick={this.handleOpenUpdateClick} />
        {this.state.modalVisible && (
          <ModalContainer>
            <Modal handleClick={this.handleCloseModal}>
              <h1>Esto es un portal</h1>
            </Modal>
          </ModalContainer>
        )}
        {this.state.modalUpdate && (
          <ModalUpdate handleClick={this.handleCloseUpdateClick} employee={this.state.employee}>
            <h1>Modal para Actualizar data!</h1>
          </ModalUpdate>
        )}
      </div>
    );
  }
}

export default App;
