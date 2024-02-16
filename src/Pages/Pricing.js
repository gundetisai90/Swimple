import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoCard from '../Components/Card'; // assuming InfoCard is in the same directory
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';

function FourCards() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Container>
                    <Row>
                        <Col md={6}><InfoCard title="Live Deal Only" hours="1" liveDelayFeedback="Included" qualitativeFeedback="Included" scientistSession="Not Included" report="Not Included" price="5000" /></Col>
                        <Col md={6}><InfoCard title="Single Session" hours="4" liveDelayFeedback="Included" qualitativeFeedback="Included" scientistSession="Included" report="Included" price="9000" /></Col>
                    </Row>
                    <Row>
                        <Col md={6}><InfoCard title="Quarterly" hours="18" liveDelayFeedback="Included" qualitativeFeedback="Included" scientistSession="Included" report="Included" price="8000" /></Col>
                        <Col md={6}><InfoCard title="Yearly" hours="72" liveDelayFeedback="Included" qualitativeFeedback="Included" scientistSession="Included" report="Included" price="7000" /></Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default FourCards;
