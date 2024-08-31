import React from 'react';
import '../styles/components/CitySelector.scss';

const CitySelector = ({ cities, onSelectCity }) => {
  return (
    <div className="city-selector">
      <label htmlFor="city-select">Şehir Seçin:</label>
      <select id="city-select" onChange={(e) => onSelectCity(e.target.value)}>
        <option value="">Şehir Seçin</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
