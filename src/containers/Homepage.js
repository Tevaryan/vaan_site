import React, { Component } from 'react';
import Navbar from '../containers/Nav';
import WorkOne from '../components/workOne';
import WorkTwo from '../components/workTwo';
import WorkThree from '../components/workThree';
import Tagline from '../components/Tagline'
import Carsel from '../components/Carousel'

import '../App.css';

class Homepage extends Component {

  render()
  {
    return (
      <>
        <Navbar/>
        <Tagline/>
        <WorkTwo/>
        <WorkOne/>
        <WorkTwo/>
      </>
    )
  }
}

export default Homepage;
