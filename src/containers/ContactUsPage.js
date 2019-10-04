import React, { Component } from 'react';
import Navbar from '../containers/Nav';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ContactUspage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        recipient :'tevaryan1993@gmail.com',
        sender: '',
        subject: '',
        text: ''
      }
    };
  }

  sendEmail = () => {
    const email = this.state.email
    fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
    .catch(err => console.error(err))
    window.location.reload();
  }

  render() {
    const email = this.state.email;
    return (
      <div>
        <Navbar/>

        <div className="d-flex justify-content-center mt-5">
          <div className="d-flex flex-column">
            <h1 className="pt-5 text-center" style={{fontSize:'350%'}}>We'd love to hear from you</h1>
            <Form className="p-5">
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="state your email here" value={email.sender}
                  onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
              </FormGroup>
              <FormGroup>
                <Label >Subject</Label>
                <Input placeholder="How can we help you in a few words" value={email.subject}
                  onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" value={email.text} placeholder="Do Elaborate"
                  onChange={e => this.setState({ email: { ...email, text: e.target.value } })}/>
              </FormGroup>
              <FormGroup>
                {/* <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above input.
                  It's a bit lighter and easily wraps to a new line.
                </FormText> */}
              </FormGroup>
              <Button  onClick={this.sendEmail} >Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUspage;