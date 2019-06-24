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

  render() {
    return (
      <div style={{backgroundColor:'#EDEEF0', position:'sticky', top:'0'}}>
        <div className="w-50 mx-auto">
          <Nav className="d-flex my-auto justify-content-between" >
            <NavLink tag={Link} to={'/'} className="d-flex Nav-text">Home</NavLink>
            <NavLink tag={Link} to={'/Portfolio'}className="d-flex Nav-text" >Portfolio</NavLink>
            <NavLink tag={Link} to={'/Gallery'}className="d-flex Nav-text" >Gallery</NavLink>
            <NavLink tag={Link} to={'/ContactUs'} className="d-flex Nav-text">Contact Us</NavLink>
          </Nav>
        </div>
        {/* <hr className="my-0" style={{border: '1px solid #8E9094'}}/> */}
      </div>
    );
  }
}

