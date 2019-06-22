import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
import Carsel from '../components/Carousel';

export default class Navbar extends Component {
  render() {
    return (
      <div className="w-50 mx-auto" style={{position:'sticky', top:'0'}}>
        <Nav className="d-flex my-auto justify-content-between" >
          <NavLink href="#" className="d-flex" onClick={this.props.button_log}>Home</NavLink>
          <NavLink href="#" className="d-flex">Portfolio</NavLink>
          <NavLink href="#" className="d-flex">Contact Us</NavLink>
        </Nav>
        <hr className="my-0"/>
      </div>
    );
  }
}

