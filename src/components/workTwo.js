import React, { Component } from 'react';
import Flooring from '../assets/Flooring.jpg'
import './Components.css';

class WorkTwo extends Component {
  render() {
    return (
      <div style={{width:"100vw", height:"50vh"}} >
        <div className="d-flex w-75 mx-auto h-100 workContainer">

          <div className="justify-content-end workImage my-auto" style={{backgroundImage:`url(${Flooring})`, backgroundSize:'cover', objectFit: 'contain', boxShadow: '5px 5px 5px grey'}}>
          </div>

          <div style={{width:'100%'}} className="workDescriptionContainer my-auto mx-auto text-start">
            <h2 style={{fontSize:"150%", color:'#696969'}} className="font-weight-bold">Flooring</h2>
            <p className="workDescription" style={{fontSize:"100%"}}> We do Tile hacking and Overlay. We also provide marble and parquet installation and polish.</p>
          </div>

        </div>
      </div>
    );
  }
}

export default WorkTwo









