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
      toiletProperty: data.toilet[0],
      toilet: data.toilet,
    };
  }

  componentDidMount () {
    this.handleToiletinterval()
  }

  handleToiletinterval = () => {
    this.myinterval = setInterval(() => {
      this.setState(prevState => ({
          index: prevState.index + 1,
          toiletProperty: data.toilet[this.state.index],
        }))
    }, 3000)
  }


  componentWillUpdate () {
    if (this.state.index === 4) {
      this.setState ({
        index: 0,
        toiletProperty: data.toilet[0],
      })
    }
  }

  render() {
    const toiletProperty= this.state.toiletProperty
    return (
      <div>
        <TransitionGroup >
          <CSSTransition
            key={toiletProperty._id}
            timeout={1000}
            classNames="fade"
          >
            <Pictures property={toiletProperty} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default CarpentryGallery