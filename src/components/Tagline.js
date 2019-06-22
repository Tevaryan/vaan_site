import React, { Component } from 'react';

class template extends Component {
  render() {
    return (
      <div style={{width:"100vw", height:"60vh"}}>
        <div className="d-flex flex-column align-items-end w-100" style={{marginTop:'250px'}}>
          <div className='w-50'>
            <h1>Company Tagline</h1>
            <p className= 'w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default template;