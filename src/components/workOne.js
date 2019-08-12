import React, { Component } from 'react';
import plumbing from "../assets/plumbing.jpg"
import './Components.css'

class WorkOne extends Component {
  render() {
    return (
      <div style={{width:"100vw", height:"50vh"}}>
        <div className="d-flex w-75 mx-auto h-100 workContainerOne">
          <div style={{width:'100%'}} className="workDescriptionContainer my-auto mx-auto text-start">
              <h2 style={{fontSize:"150%" , color:'#696969'}} className="font-weight-bold">Plumbing Works</h2>
              <p className="workDescription" style={{fontSize:"100%"}}>We work on toilet bowls, sink, and shower. We also do plumbing for your kitchen sink.</p>
          </div>

          <div className="justify-content-end workImage my-auto" style={{backgroundImage:`url(${plumbing})`, backgroundSize:'cover', boxShadow: '5px 5px 5px grey'}}></div>

        </div>
      </div>
    )
  }
}

export default WorkOne;