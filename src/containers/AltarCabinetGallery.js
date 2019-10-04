import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Pictures from './Pictures';
import '../App.css';
import data from "../assets/data.js"

class AltarCabinetGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      altarCabinetProperty: data.altarCabinet[0],
      altarCabinet: data.altarCabinet,
    };
  }

  componentDidMount () {
    this.handleAltarCabinetinterval()
  }

  handleAltarCabinetinterval = () => {
      this.myinterval = setInterval(() => {
        this.setState(prevState => ({
            index: prevState.index + 1,
            altarCabinetProperty: data.altarCabinet[this.state.index]
          }))
      }, 3000)
    }


  componentWillUpdate () {
    if (this.state.index === 4) {
      this.setState ({
        index: 0,
        altarCabinetProperty: data.altarCabinet[0],
      })
    }
  }

  render() {
    const altarCabinetProperty = this.state.altarCabinetProperty
    return (
      <div>
        <TransitionGroup >
          <CSSTransition
            key={altarCabinetProperty._id}
            timeout={1000}
            classNames="fade"
          >
            <Pictures property={altarCabinetProperty} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default AltarCabinetGallery