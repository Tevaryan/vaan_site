import React, { Component } from 'react';
import Navbar from '../containers/Nav';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ContactUspage extends Component {
  render() {
    return (
      <div>
        <Navbar/>

        <div className="d-flex justify-content-center mt-5">
          <div className="d-flex flex-column">
            <h1 className="pt-5 text-center" style={{fontSize:'350%'}}>We'd love to hear from you</h1>
            <Form className="p-5">
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above input.
                  It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUspage;