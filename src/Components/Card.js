import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './InfoCard.css'; // assuming InfoCard.css is in the same directory

function InfoCard(props) {
  return (
    <Card className="info-card shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted ">Details</Card.Subtitle>
        <Card.Text>
          <strong>No of hours:</strong> {props.hours}<br/>
          <strong>Live Delay Feedback:</strong> {props.liveDelayFeedback}<br/>
          <strong>Qualitative Feedback with Sports Analyst:</strong> {props.qualitativeFeedback}<br/>
          <strong>1:1 Sports Scientist Session:</strong> {props.scientistSession}<br/>
          <strong>Detailed Report:</strong> {props.report}<br/>
          <strong>Price (INR):</strong> {props.price}
        </Card.Text>
        <Button variant="primary">Purchase</Button>
      </Card.Body>
    </Card>
  );
}

export default InfoCard;
