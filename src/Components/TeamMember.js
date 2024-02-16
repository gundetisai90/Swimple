import React from 'react';


const TeamMember = ({ name, description, image }) => (
  <div style={{ flex: '0 0 calc(25% - 20px)', margin: '10px', padding: '20px', border: '0px solid #ccc', borderRadius: '4px' }}>
    <img src={image} alt={name} style={{ width: '100%' }} />
    <h2>{name}</h2>
    <p>{description}</p>

  </div>
);

export default TeamMember;
