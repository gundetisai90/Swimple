import React from 'react';
import TeamMember from './TeamMember';
import Image from 'react-bootstrap/Image';
import './Carousel.css';
const logo = require('./logo.png');

const teamMembers = [
    {
        name: 'Sandeep K N',
        description: 'Sandeep is a seasoned entrepreneur with expertise in enterprise architecture and application integration. He co-founded ventures like MonkeyBox, and SportingMindz, showcasing a versatile career spanning innovation and technology.',
        image: 'sandeep.jpg' // replace with actual image path
    },
    {
        name: 'Aditya Kariyappa',
        description: 'Aditya Kariyappa, sports science researcher at Innosportlab, excels in biomechanical analysis of swimming techniques. His precision and technology-driven approach enhance swimmers\' performance at all levels, shaping the sport\'s future.',
        image: 'aditya.jpg' // replace with actual image path
    },
    {
        name: 'Raghavendra Pai',
        description: 'Raghavendra is a strateĀic leader overseeing growth and analytics ÿor Global company in Middle-East, With expertise in revenue growth, data analysis, and strateĀic planning, he ensures sustainable expansion and profitability while driving the program\'s expansion to new cities.',
        image: 'raghavendra.jpg'
    },
    {
        name: 'Jay Mehta',
        description: 'Jay Mehta, based in Gujarat, is an integral part oÿ Shivranjani Construction Co. His role primarily involves securing deals for the company and overseeinĀ projects related to electrical and optical fiber cable connectivity. His contributions are vital to the company\'s success.',
        image: 'jay.jpg'
    }
    // add other team members here...
];

const Team = () => (
    <div>
    <h1>Swimple Team</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {teamMembers.map(member => (
        <TeamMember
          key={member.name}
          name={member.name}
          description={member.description}
          image={member.image}
        />
      ))}
    </div>
    <Image src={logo}  className="team-logo" />
  </div>
);

export default Team;
