import React, { Component } from 'react';

class WorkThree extends Component {
  render() {
    return (
      <div style={{width:"100vw",backgroundColor:"#d6dade", height:"50vh"}}>
        <div className="d-flex py-5 w-75 mx-auto h-100">
            <div className="p-5" style={{width:'65%'}}>
              <p style={{fontSize:"75%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="justify-content-end" style={{backgroundColor:"white", width:'35%'}}>
            </div>
        </div>
      </div>
    );
  }
}

export default WorkThree