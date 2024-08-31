import React from 'react';
import '../styles/components/AttractionDetails.scss';

const AttractionDetails = ({ attraction }) => {
  if (!attraction) return <div>Bir yer seçin...</div>;

  return (
    <div className="attraction-details">
      <h2>{attraction.name}</h2>
      <p>{attraction.description}</p>
      <p><strong>Konum:</strong> {attraction.location}</p>
    </div>
  );
};

export default AttractionDetails;
