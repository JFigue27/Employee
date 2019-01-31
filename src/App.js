import React, { Component } from "react";
import EmployeeReadList from "./pages/containers/employee-read-list";
import ModalContainer from "./widgets/containers/modal";
import Modal from "./widgets/components/modal-employee-form";
import AppLayout from "./pages/components/App-Layout";
import "./App.css";

class App extends Component {
  state = {
    modalVisible: false
  };

  handleOpenModal = event => {
    this.setState({
      modalVisible: true
    });
  };
  handleCloseModal = event => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    return (
      <div className="App">
        <AppLayout />
        <EmployeeReadList handleClick={this.handleOpenModal} />
        {this.state.modalVisible && (
          <ModalContainer>
            <Modal handleClick={this.handleCloseModal}>
              <h1>Esto es un portal</h1>
            </Modal>
          </ModalContainer>
        )}
      </div>
    );
  }
}

export default App;
