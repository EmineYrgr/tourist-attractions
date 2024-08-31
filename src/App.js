import React, { useState } from 'react';
import './styles/App.scss';
import RegionMenu from './components/RegionMenu';
import CityMenu from './components/CityMenu';  // Şehir menüsü için güncellenmiş bileşen
import AttractionList from './components/AttractionList';
import AttractionDetails from './components/AttractionDetails';
import attractionsData from './data/attractions.json';

function App() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const regions = Object.keys(attractionsData);
  const cities = selectedRegion ? Object.keys(attractionsData[selectedRegion]) : [];

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setSelectedCity('');
    setSelectedAttraction(null); // Önceki seçimleri sıfırlamak için
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSelectedAttraction(null);
  };

  const handleAttractionSelect = (attraction) => {
    setSelectedAttraction(attraction);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Turistik Yerler Rehberi</h1>
      </header>
      <RegionMenu
        regions={regions}
        onSelectRegion={handleRegionSelect}
        selectedRegion={selectedRegion}
      />
      {selectedRegion && (
        <CityMenu
          cities={cities}
          onSelectCity={handleCitySelect}
          selectedCity={selectedCity}
        />
      )}
      {selectedCity && (
        <AttractionList
          attractions={attractionsData[selectedRegion][selectedCity]}
          onSelectAttraction={handleAttractionSelect}
        />
      )}
      {selectedAttraction && <AttractionDetails attraction={selectedAttraction} />}
    </div>
  );
}

export default App;
