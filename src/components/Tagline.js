import React, { Component } from 'react';
import Background from '../assets/wallpaper2.jpg'
import './Components.css'

class template extends Component {
  render()
  {
    return (
      <>
        <div style={{backgroundImage: `url(${Background})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}     className='BackgroundImage'>
          <div className="d-flex flex-column justify-content-center align-items-center" style={{height:'100%', width: '100%'}}>

            <div className='w-75 text-center TextContainer'>
              <h1 className='font-weight-bold' style={{ color:'#992525'}}>Akram Renovations</h1>
              <div className='d-flex flex-row justify-content-center flex-wrap '>
                <div className="mx-4" style={{ color:'#A9A9A9'}}>
                  <h3>Imagination.</h3>
                </div>
                <div className="mx-4" style={{ color:'#A9A9A9'}}>
                  <h3>Creation.</h3>
                </div>
                <div className="mx-4" style={{ color:'#A9A9A9'}}>
                  <h3>Renovation</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-100 text-center TextContainer2'>
          <h2 className='font-weight-bold' style={{ color:'#992525'}}>Akram Renovations</h2>
          <div className='d-flex flex-row justify-content-center flex-wrap '>
            <div className="mx-4" style={{ color:'#A9A9A9'}}>
              <p>Imagination. Creation. Renovation</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default template;