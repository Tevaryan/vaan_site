import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Pictures from './Pictures';
import '../App.css';
import data from "../assets/data.js"

class KitchenGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      kitchenProperty: data.kitchen[0],
      kitchen: data.kitchen,
    };
  }

  componentDidMount () {
    this.handlekitcheninterval()
  }

  handlekitcheninterval = () => {
    this.myinterval = setInterval(() => {
      this.setState(prevState => ({
          index: prevState.index + 1,
          kitchenProperty: data.kitchen[this.state.index]
        }))
    }, 3000)
  }

  componentWillUpdate () {
    if (this.state.index === 4) {
      this.setState ({
        index: 0,
        kitchenProperty: data.kitchen[0],
      })
    }
  }

  render() {
    const kitchenProperty = this.state.kitchenProperty
    return (
      <div>
        <TransitionGroup >
            <CSSTransition
              key={kitchenProperty._id}
              timeout={1000}
              classNames="fade"
            >
              <Pictures property={kitchenProperty} />
            </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default KitchenGallery