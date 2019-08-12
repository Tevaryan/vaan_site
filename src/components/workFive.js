import React, { Component } from 'react';
import ceiling from '../assets/ceiling.jpg'
import './Components.css';

class WorkFive extends Component {
  render() {
    return (
      <div style={{width:"100vw", height:"50vh"}} >
        <div className="d-flex w-75 mx-auto h-100 workContainer">

          <div className="justify-content-end workImage my-auto" style={{backgroundImage:`url(${ceiling})`, backgroundSize:'cover', objectFit: 'contain', boxShadow: '5px 5px 5px grey'}}>
          </div>

          <div style={{width:'100%'}} className="workDescriptionContainer my-auto mx-auto text-start">
            <h2 style={{fontSize:"150%", color:'#696969'}}>Ceiling Works</h2>
            <p className="workDescription" style={{fontSize:"100%"}}>We make false ceilings and cornises.</p>
          </div>

        </div>
      </div>
    );
  }
}
export default WorkFive
