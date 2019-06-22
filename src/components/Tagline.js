import React, { Component } from 'react';
import Background from '../assets/living-wall-art-1000x450.jpg'

class template extends Component {
  render()
  {
    return (
      <div style={{backgroundImage: `url(${Background})`, height:'100vh',backgroundSize: 'cover'}}>
        <div className="d-flex flex-column align-items-end w-100" style={{marginTop:''}}>

          <div className='w-50' style={{color:'black', marginTop:'400px'}}>
            <h1>Company Tagline</h1>
            <p className= 'w-75' style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default template;