import React, { Component } from 'react';
import './Components.css';

class Values extends Component {
  render() {
    return (
      <div className=' ValuesContainer' style={{height:'50%', width:'100%', backgroundColor:'rgba(211,211,211,0.3)'}}>
        <div className='d-flex flex-column justify-content-center px-5 w-100 ValueThemeDiv'>
          <div className="w-75 font-weight-bold ValueThemeContainer">
            <h2>Building your dream home</h2>
          </div>
        </div>
        <div className='align-items-center w-100 DescriptionContainer'>
          <p>We are a Singapore based renovation company that caters to residential home renovations. We
              bring quality services with competitive prices to our clients. We value our customer experience with
              us by listening to our customers needs and desires and by providing timely services. We welcome
              customised renovations to bring your dreams to a reality.</p>
        </div>
      </div>
    );
  }
}

export default Values
