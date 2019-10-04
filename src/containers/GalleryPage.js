import React, { Component } from 'react';
import Navbar from '../containers/Nav';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import wallTexture from '../assets/wallpaper.jpg'
import '../App.css';
import data from "../assets/data.js"
import KitchenGallery from "./KitchenGallery.js"
import AltarCabinetGallery from "./AltarCabinetGallery"
import CarpentryGallery from "./CarpentryGallery"
import TableGallery from "./TableGallery"
import ToiletGallery from "./ToiletGallery"
import TVConsoleCabinetGallery from "./TVConsoleCabinetGallery.js"


class Gallerypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      active_index: 0,
      show: false ,
      data: data.kitchen,
      name: 'Kitchen Gallery'
    };
    this.toggleKitchen = this.toggleKitchen.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAltarCabinet = this.toggleAltarCabinet.bind(this);
    this.toggleCarpentry = this.toggleCarpentry.bind(this);
    this.toggleTable = this.toggleTable.bind(this);
    this.toggleToilet = this.toggleToilet.bind(this);
    this.toggleTVConsoleCabinet = this.toggleTVConsoleCabinet.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleKitchen() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
    this.setState({
      data: data.kitchen,
      name: 'Kitchen Gallery'
    })
  }

  toggleAltarCabinet() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
    this.setState({
      data: data.altarCabinet,
      name: 'Altar Cabinet Gallery'
    })
  }

  toggleCarpentry() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
    this.setState({
      data: data.carpentry,
      name: 'Carpentry Gallery'
    })
  }

  toggleTable() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
    this.setState({
      data: data.table,
      name: 'Table Gallery'
    })
  }

  toggleToilet() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
    this.setState({
      data: data.toilet,
      name: 'Toilet Gallery'
    })
  }

  toggleTVConsoleCabinet() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
    this.setState({
      data: data.tvConsole,
      name: 'TV Console Cabinet Gallery'
    })
  }

  index = (index_id) => {
    this.setState({active_index: index_id})
    console.log(index_id)
  }


  render() {

    return (
      <div style={{ backgroundImage:`url(${wallTexture})`, backgroundRepeat: 'repeat-y repeat-x'}}>
        {/* <div className="Navbar" style={{position:'relative'}}>
          <Navbar className="Navbar" />
        </div> */}
        <Navbar className="Navbar" />
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg" >
            <ModalHeader toggle={this.toggle}>{this.state.name}</ModalHeader>
            <ModalBody style={{ backgroundImage:`url(${wallTexture})`, backgroundRepeat: 'repeat-y repeat-x'}}className='modal-lg'>
              {
                this.state.data.map(picture =>
                  <div className='d-flex justify-content-center mt-4'>
                    <img style={{width:'100%', objectFit:'contain'}} src={picture.picture} alt={picture.index}/>
                  </div>
                )
              }
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>

        <div className='d-flex justify-content-center mt-5' >
          <div className="d-flex flex-column" style={{position: 'relative'}}>
            <div style={{width:'90vw', height:'70vh', opacity:'0.85'}} onClick={this.toggleKitchen}>
              <KitchenGallery/>
            </div>
            <div className='d-flex pl-4' style={{width:'30vw', position:'absolute', marginTop:'65vh', marginLeft:'10vw', backgroundColor: '#ffbf91', boxShadow: '5px 5px 5px grey', opacity:'0.9'}}>
              <h1 className=''>KITCHEN</h1>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center mt-5' >
          <div className="d-flex flex-column" style={{position: 'relative'}}>
            <div style={{width:'90vw', height:'70vh', opacity:'0.85'}} onClick={this.toggleAltarCabinet}>
              <AltarCabinetGallery/>
            </div>
            <div className='d-flex pl-4' style={{width:'30vw', position:'absolute', marginTop:'65vh', marginLeft:'10vw', backgroundColor: '#ffbf91', boxShadow: '5px 5px 5px grey', opacity:'0.9'}}>
              <h1 className=''>ALTAR CABINET</h1>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center mt-5' >
          <div className="d-flex flex-column" style={{position: 'relative'}}>
            <div style={{width:'90vw', height:'70vh', opacity:'0.85'}} onClick={this.toggleCarpentry}>
              <CarpentryGallery/>
            </div>
            <div className='d-flex pl-4' style={{width:'30vw', position:'absolute', marginTop:'65vh', marginLeft:'10vw', backgroundColor: '#ffbf91', boxShadow: '5px 5px 5px grey', opacity:'0.9'}}>
              <h1 className=''>CARPENTRY</h1>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center mt-5' >
          <div className="d-flex flex-column" style={{position: 'relative'}}>
            <div style={{width:'90vw', height:'70vh', opacity:'0.85'}} onClick={this.toggleTable}>
              <TableGallery/>
            </div>
            <div className='d-flex pl-4' style={{width:'30vw', position:'absolute', marginTop:'65vh', marginLeft:'10vw', backgroundColor: '#ffbf91', boxShadow: '5px 5px 5px grey', opacity:'0.9'}}>
              <h1 className=''>TABLE</h1>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center mt-5' >
          <div className="d-flex flex-column" style={{position: 'relative'}}>
            <div style={{width:'90vw', height:'70vh', opacity:'0.85'}}
            onClick={this.toggleToilet}>
              <ToiletGallery/>
            </div>
            <div className='d-flex pl-4' style={{width:'30vw', position:'absolute', marginTop:'65vh', marginLeft:'10vw', backgroundColor: '#ffbf91', boxShadow: '5px 5px 5px grey', opacity:'0.9'}}>
              <h1 className=''>TOILET</h1>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center mt-5' >
          <div className="d-flex flex-column" style={{position: 'relative'}}>
            <div style={{width:'90vw', height:'70vh', opacity:'0.85'}} onClick={this.toggleTVConsoleCabinet}>
              <TVConsoleCabinetGallery/>
            </div>
            <div className='d-flex pl-4' style={{width:'40vw', position:'absolute', marginTop:'65vh', marginLeft:'10vw', backgroundColor: '#ffbf91', boxShadow: '5px 5px 5px grey', opacity:'0.9'}}>
              <h1 className=''>TV CONSOLE CABINET</h1>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Gallerypage;