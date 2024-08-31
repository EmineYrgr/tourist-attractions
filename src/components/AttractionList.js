import React from 'react';
import '../styles/components/AttractionList.scss';

const AttractionList = ({ attractions, onSelectAttraction }) => {
  return (
    <div className="attraction-list">
      <h2>Turistik Yerler</h2>
      <ul>
        {attractions.map((attraction) => (
          <li key={attraction.name} onClick={() => onSelectAttraction(attraction)}>
            {attraction.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttractionList;
