import React, { Component } from 'react';
import Navbar from './Nav';
import './Containers.css'

class PortfolioPage extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div style={{width:"100vw",backgroundColor:"", height:"100vh"}} >
        <div className="d-flex w-100 mx-auto h-50 d-flex flex-column p-4">

            <div className="h-100 w-100" style={{backgroundColor:"#d6dade"}}></div>
            <div className="w-100 h-50 mx-auto">
              <h2>Portfolio 1</h2>
              <p style={{fontSize:"65%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
      </div>
      </>
    )
  }
}

export default PortfolioPage;