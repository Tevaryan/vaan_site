import React, { Component } from 'react';
import { Nav, NavLink, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import {Link} from "react-router-dom";
import '../App.css'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false
    };
  }

  modalToggle = () => {
    this.setState({toggleModal: !this.state.toggleModal})
  }

  render() {
    return (
      <div style={{backgroundColor:'#EDEEF0', position:'sticky', top:'0'}}>
        <div className="w-50 mx-auto">
          <Nav className="d-flex my-auto justify-content-between" >
            <NavLink tag={Link} to={'/'} className="d-flex Nav-text">Home</NavLink>
            <NavLink tag={Link} to={'/Portfolio'}className="d-flex Nav-text" >Portfolio</NavLink>
            <NavLink href="#" className="d-flex Nav-text" onClick={this.modalToggle} >Contact Us</NavLink>
          </Nav>
          <Modal isOpen={this.state.toggleModal} toggle={this.modalToggle}>
            <ModalHeader toggle={this.toggle}>Submit Email</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
        {/* <hr className="my-0" style={{border: '1px solid #8E9094'}}/> */}
      </div>
    );
  }
}

