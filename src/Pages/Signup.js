import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Signup() {
  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicMobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter mobile number" />
        </Form.Group>

        <Form.Group controlId="formBasicLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter location" />
        </Form.Group>

        <Form.Group controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter age" />
        </Form.Group>

        <Form.Group controlId="formBasicDob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
