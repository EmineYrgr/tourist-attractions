import React from 'react';
import '../styles/components/RegionSelector.scss';

const RegionSelector = ({ regions, onSelectRegion }) => {
  return (
    <div className="region-selector">
      <label htmlFor="region-select">Bölge Seçin:</label>
      <select id="region-select" onChange={(e) => onSelectRegion(e.target.value)}>
        <option value="">Bölge Seçin</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionSelector;
