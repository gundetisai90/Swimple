import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar';

const ContactUs = () => {
    return (
        <div style={{ position: 'relative' }}>
            <video autoPlay loop muted style={{
                position: 'absolute',
                width: '100%',
                left: '50%',
                top: '50%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                zIndex: '-1'
            }}>
                <source src="path_to_your_video.mp4" type="video/mp4" />
            </video>
            <NavBar />
            <Container>
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicSubject">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" placeholder="Enter subject" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default ContactUs;
