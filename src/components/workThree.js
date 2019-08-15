import React, { Component } from 'react';
import Carpentry from '../assets/Carpentry.jpg'
import './Components.css';
import Fade from 'react-reveal/Fade';

class WorkThree extends Component {
  render() {
    return (
      <Fade left duration="1000">
        <Fade>
          <div style={{width:"100vw", height:"50vh"}} >
            <div className="d-flex w-75 mx-auto h-100 workContainer">

              <div className="justify-content-end workImage my-auto" style={{backgroundImage:`url(${Carpentry})`, backgroundSize:'cover', objectFit: 'contain', boxShadow: '5px 5px 5px grey'}}>
              </div>

              <div style={{width:'100%'}} className="workDescriptionContainer my-auto mx-auto text-start">
                <h2 style={{fontSize:"150%", color:'#696969'}} className="font-weight-bold">Carpentry</h2>
                <p className="workDescription" style={{fontSize:"100%"}}> We make wardorbes, shelves and cabinets that are custom made to your specifications. We also make altar cabinets. Besides that, we also do Bed Frames and TV consoles.</p>
              </div>

            </div>
          </div>
        </Fade>
      </Fade>
    );
  }
}

export default WorkThree
