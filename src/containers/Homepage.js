import React, { Component } from 'react';
import Navbar from '../containers/Nav';
import WorkOne from '../components/workOne';
import WorkTwo from '../components/workTwo';
import wallTexture from '../assets/wallpaper.jpg'
import WorkThree from '../components/workThree';
import WorkFour from '../components/workFour';
import WorkFive from '../components/workFive';
import Values from '../components/values'
import Tagline from '../components/Tagline'
import '../App.css';



import '../App.css';

class Homepage extends Component {

  render()
  {
    return (
      <>
        <Navbar className="Navbar"/>
        <div style={{ backgroundImage:`url(${wallTexture})`, backgroundRepeat: 'repeat-y repeat-x'}}>
          <Tagline/>
          <Values/>
          <WorkTwo/>
          <WorkOne/>
          <WorkThree/>
          <WorkFour/>
          <WorkFive/>
        </div>
      </>
    )
  }
}

export default Homepage;
