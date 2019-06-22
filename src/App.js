import React, { Component } from 'react';
import Navbar from './containers/Nav';
import WorkOne from './components/workOne';
import WorkTwo from './components/workTwo';
import WorkThree from './components/workThree';
import Tagline from './components/Tagline'
import Carsel from './components/Carousel'
import './App.css';

class App extends Component {

  button_log = () => {
    console.log('blabla')
  }
  render()
  {
    return (
      <>
        <Navbar/>
        <Tagline/>
        <WorkOne/>
        <WorkTwo/>
        <WorkThree/>
        <Carsel style={{height:'100vh'}}/>
      </>
    )
  }
}
export default App;
