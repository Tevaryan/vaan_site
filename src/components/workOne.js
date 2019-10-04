import React, { Component } from 'react';
import plumbing from "../assets/plumbing.jpg"
import './Components.css'
import Fade from 'react-reveal/Fade';

class WorkOne extends Component {
  render() {
    return (
      <Fade right duration="1000">
        <Fade>
          <div style={{width:"100vw", height:"50vh"}}>
            <div className="d-flex w-50  h-100 workContainerOne" style={{position:'relative', marginTop:'5%', marginLeft:'50%'}}>

              <div style={{width:'100%', position:'absolute',backgroundColor: '#E5E5E5', opacity:'0.95', top:'200px', right:'450px', boxShadow: '2px 2px 5px grey', textAlign:'justify'}} className="workDescriptionContainer my-auto mx-auto text-start">
                  <h2 style={{fontSize:"150%" , color:'#696969'}} className="font-weight-bold">Plumbing Works</h2>
                  <p className="workDescription" style={{fontSize:"100%"}}>Your bathroom should be the last place where you experience any form of discomfort. From the sink to the shower, everything can be fixed. Plumbing works for your kitchen are also available.</p>
              </div>

              <div className="justify-content-end workImage my-auto" style={{backgroundImage:`url(${plumbing})`, backgroundSize:'cover', boxShadow: '5px 5px 5px grey', objectFit: 'contain'}}></div>

            </div>
          </div>
        </Fade>
      </Fade>
    )
  }
}

export default WorkOne;