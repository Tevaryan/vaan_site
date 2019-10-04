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
      tableProperty: data.table[0],
      table: data.table,
    };
  }

  componentDidMount () {
    this.handleTableinterval()
  }

  handleTableinterval = () => {
    this.myinterval = setInterval(() => {
      this.setState(prevState => ({
          index: prevState.index + 1,
          tableProperty: data.table[this.state.index],
        }))
    }, 3000)
  }


  componentWillUpdate () {
    if (this.state.index === 4) {
      this.setState ({
        index: 0,
        tableProperty: data.table[0],
      })
    }
  }

  render() {
    const tableProperty=  this.state.tableProperty
    return (
      <div>
        <TransitionGroup >
          <CSSTransition
            key={tableProperty._id}
            timeout={1000}
            classNames="fade"
          >
            <Pictures property={tableProperty} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default CarpentryGallery