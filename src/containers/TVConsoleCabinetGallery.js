import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Pictures from './Pictures';
import '../App.css';
import data from "../assets/data.js"

class CarpentryGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      tvConsoleProperty: data.tvConsole[0],
      tvConsole: data.tvConsole
    };
  }

  componentDidMount () {
    this.handleTVConsoleinterval()
  }

  handleTVConsoleinterval = () => {
    this.myinterval = setInterval(() => {
      this.setState(prevState => ({
          index: prevState.index + 1,
          tvConsoleProperty: data.tvConsole[this.state.index],
        }))
    }, 3000)
  }


  componentWillUpdate () {
    if (this.state.index === 4) {
      this.setState ({
        index: 0,
        tvConsoleProperty: data.tvConsole[0],
      })
    }
  }

  render() {
    const tvConsoleProperty = this.state.tvConsoleProperty
    return (
      <div>
        <TransitionGroup >
          <CSSTransition
            key={tvConsoleProperty._id}
            timeout={1000}
            classNames="fade"
          >
            <Pictures property={tvConsoleProperty} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default CarpentryGallery