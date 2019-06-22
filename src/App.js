import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Homepage from "./containers/Homepage.js"
import Portfoliopage from "./containers/Porfoliopage"
import './App.css';


class App extends Component {

  render()
  {
    return (
      <>
        <Route exact path ={'/'} component={Homepage}/>
        <Route path ={'/Portfolio'} component={Portfoliopage}/>
      </>
    )
  }
}

export default App;
