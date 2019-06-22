import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';

export default class Navbar extends Component {
  render() {
    return (
      <div className="w-50 mx-auto" style={{position:'sticky', top:'0'}}>
        <Nav className="d-flex my-auto justify-content-between" >
          <NavLink href="#" className="d-flex" onClick={this.props.button_log}>Link</NavLink>
          <NavLink href="#" className="d-flex">Link</NavLink>
          <NavLink href="#" className="d-flex">Another Link</NavLink>
          <NavLink disabled href="#" className="d-flex">Disabled Link</NavLink>
        </Nav>
        <hr className="my-0"/>
      </div>
    );
  }
}

