import React, { Component } from 'react';
import '../App.css';

class Pictures extends Component {
  render() {
    const {id,index,picture} = this.props.property;
    return (
      <div className="GalleryImage">
        <img style={{width:'90vw', height:'70vh', objectFit:'cover', boxShadow: '2px 2px 5px grey', overflow: 'hidden'}} src={picture} alt={index} />
      </div>


    );
  }
}

export default Pictures;