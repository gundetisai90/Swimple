import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const SessionPage = () => {
  const days = [
    {
      title: 'DAY 1 - Starts',
      activities: [
        'Qualitative Recordings of 3 starts',
        'Benchmark',
        'Real time playback',
        'Immediate feedback',
        'Fully automated and calibrated',
        'Drills for technique correction',
        'Quantitative Feedback'
      ]
    },
    {
      title: 'DAY 2 - Turns',
      activities: [
        'Qualitative Recordings of 3 turns',
        'Benchmark',
        'Real time playback',
        'Immediate feedback',
        'Fully automated and calibrated',
        'Drills for technique correction',
        'Quantitative Feedback'
      ]
    },
    {
      title: 'DAY 3 - Technique',
      activities: [
        'Qualitative Recordings of swim technique',
        'Real time playback',
        'Immediate feedback',
        'Fully automated and calibrated',
        'Drills for technique correction',
        'Quantitative Feedback'
      ]
    }
  ];

  return (
    <Container>
      <h1>What does a session look like?</h1>
      <Row>
        {days.map((day, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4 shadow-sm border rounded">
              <Card.Header>{day.title}</Card.Header>
              <ListGroup variant="flush">
                {day.activities.map((activity, index) => (
                  <ListGroup.Item key={index}>{activity}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
      <p>All information is stored and a detailed report is sent to the athlete and the coach. Data is used to benchmark against self in the next session</p>
    </Container>

  );
};

export default SessionPage;
