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
      carpentryProperty: data.carpentry[0],
      carpentry: data.carpentry,
    };
  }

  componentDidMount () {
    this.handleCarpentryinterval()
  }

  handleCarpentryinterval = () => {
    this.myinterval = setInterval(() => {
      this.setState(prevState => ({
          index: prevState.index + 1,
          carpentryProperty: data.carpentry[this.state.index]
        }))
    }, 3000)
  }


  componentWillUpdate () {
    if (this.state.index === 4) {
      this.setState ({
        index: 0,
        carpentryProperty: data.carpentry[0],
      })
    }
  }

  render() {
    const carpentryProperty=  this.state.carpentryProperty
    return (
      <div>
        <TransitionGroup >
          <CSSTransition
            key={carpentryProperty._id}
            timeout={1000}
            classNames="fade"
          >
            <Pictures property={carpentryProperty} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default CarpentryGallery