import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';
import SessionPage from '../Components/SessionPage';

function Offerings() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Container>
                    <h1 className="text-center my-5">What are we offering?</h1>
                    <Row>
                        <Col md={6}>
                            <Card className="mb-4" style={{ width: '25rem' }}>
                                <Card.Header className="bg-primary text-white">Swim Analytics Systems (2D)</Card.Header>
                                <Card.Body>
                                    <ul>
                                        <li>Fully calibrated 8 camera system</li>
                                        <li>Tracks minute movements of swimmers</li>
                                        <li>Live delay feed for instant feedback</li>
                                        <li>Measures start, turns and strokes</li>
                                        <li>Fully automated and non invasive</li>
                                        <li>AMC mandatory with system</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="mb-4" style={{ width: '25rem' }}>
                                <Card.Header className="bg-primary text-white">Swimming performance consulting</Card.Header>
                                <Card.Body>
                                    <ul>
                                        <li>3 days / session / athlete</li>
                                        <li>1:1 session with sports scientist</li>
                                        <li>Comprehensive report across swim strokes</li>
                                        <li>Clear actionable plan for improvement</li>
                                        <li>Guaranteed performance improvement</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <SessionPage/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Offerings;
