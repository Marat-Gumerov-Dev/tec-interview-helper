import React, { Component } from "react";
import Header from '../header';
import Button from "../button";
import Portal from "../portal";
import { Fragment } from "react";
import Modal from "../modal";
import './home-page.scss';
import ModalButton from "../modal-button";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLogin: false,
      isOpen: false,
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  openModal = () => {
    
    this.setState({
      isOpen: true,
    });
  }


  handleSubmit = () => {
    console.log('Submit function!');
    this.setState({
      isOpen: false
    });
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({
      isOpen: false
    });
  }

  render() {

    let modalWindow = null;
    if (this.state.userIsLogin){
      modalWindow = <Modal
                      title="Test Dialog window"
                      isOpen={this.state.isOpen}
                      onCancel={this.handleCancel}
                      onSubmit={this.handleSubmit}
                      isButton = {this.state.userIsLogin}
                      >
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p>
                    </Modal>
    } else {
      modalWindow = <ModalButton
                      isOpen = {this.state.isOpen}
                     >
                      <Button onClick={this.state.onSubmit}>Fast Start</Button>
                    </ModalButton>
    }

    return (
      <Fragment>
        <Header />
        <Button onClick={this.openModal}>Show modal</Button>
        {modalWindow}

      </Fragment>
    );
  }
}

export default HomePage;