import React from 'react';
import '../styles/components/CityMenu.scss';

const CityMenu = ({ cities, onSelectCity, selectedCity }) => {
  return (
    <div className="city-menu">
      <ul>
        {cities.map((city) => (
          <li
            key={city}
            onClick={() => onSelectCity(city)}
            className={selectedCity === city ? 'active' : ''}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityMenu;
