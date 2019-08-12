import React, { Component } from 'react';
import Electrical from "../assets/Electrical.jpg"
import './Components.css'

class WorkFour extends Component {
  render() {
    return (
      <div style={{width:"100vw", height:"50vh"}}>
        <div className="d-flex w-75 mx-auto h-100 workContainerOne">
          <div style={{width:'100%'}} className="workDescriptionContainer my-auto mx-auto text-start">
              <h2 style={{fontSize:"150%", color:'#696969'}}>Electrical Works</h2>
              <p className="workDescription" style={{fontSize:"100%"}}>We do installation of lights, fans and power sockets. We also do airconditioning repair and cleaning.  </p>
          </div>

          <div className="justify-content-end workImage my-auto" style={{backgroundImage:`url(${Electrical})`, backgroundSize:'cover', boxShadow: '5px 5px 5px grey'}}></div>

        </div>
      </div>
    )
  }
}

export default WorkFour;