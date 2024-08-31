import React from 'react';
import '../styles/components/RegionMenu.scss';

const RegionMenu = ({ regions, onSelectRegion, selectedRegion }) => {
  return (
    <div className="region-menu">
      <ul>
        {regions.map((region) => (
          <li
            key={region}
            onClick={() => onSelectRegion(region)}
            className={selectedRegion === region ? 'active' : ''}
          >
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegionMenu;
