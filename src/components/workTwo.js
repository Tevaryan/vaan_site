import React, { Component } from 'react';
import Flooring from '../assets/Flooring.jpg'
import './Components.css';
import Fade from 'react-reveal/Fade';

class WorkTwo extends Component {
  render() {
    return (
      <Fade left duration="1000">
        <Fade >
          <div style={{width:"100vw", height:"50vh"}} >
            <div className="d-flex w-50 h-100 workContainer" style={{position:'relative', marginLeft:'15%'}}>

              <div className="justify-content-end workImage my-auto" style={{backgroundImage:`url(${Flooring})`, backgroundSize:'cover', objectFit: 'contain', boxShadow: '5px 5px 5px grey'}}>
              </div>

              <div style={{width:'100%', backgroundColor: '#E5E5E5', opacity:'0.95',position:'absolute', top:'200px', left:'250px', boxShadow: '2px 2px 5px grey', textAlign:'justify'}} className="workDescriptionContainer my-auto mx-auto text-start p-3 w-80">
                <h2 style={{fontSize:"150%", color:'#696969'}} className="font-weight-bold">Flooring</h2>
                <p className="workDescription" style={{fontSize:"100%"}}> They say the floor is the sole of the house, no home is complete without an amazing looking floor.From tile hacking and overlay to marble and parquet installation and polish. Elevate your home experience with our great flooring options.</p>
              </div>

            </div>
          </div>
        </Fade>
      </Fade>

    );
  }
}

export default WorkTwo









