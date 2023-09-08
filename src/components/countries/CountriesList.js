import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';
import filterCountries from '../../utils/filters';
import '../../assets/css/CountriesList.css';
import FilterCountries from '../filter/FilterCountries';

const CountriesList = () => {
  const { countries } = useSelector((state) => state.countries);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (countries.length > 0) {
      setFilteredCountries(countries);
    }
  }, [countries]);

  const handleFilter = (value) => {
    setFilteredCountries(filterCountries(countries, value));
  };

  const colors = ['light', 'dark'];
  let ops = 'increment';
  let round = 0;
  const returnColor = () => {
    let color = '';
    if (ops === 'increment') {
      color = colors[round];
      round += 1;
      if (round > 1) {
        round = 1;
        ops = 'decrement';
      }
    } else {
      color = colors[round];
      round -= 1;
      if (round < 0) {
        round = 0;
        ops = 'increment';
      }
    }
    return color;
  };

  return (
    <div className="countries-container">
      <FilterCountries
        filterEvent={(e) => handleFilter(e.target.value)}
      />
      <div>
        <ul className="countries-container-ul">
          {filteredCountries.map((country) => (
            <Country
              key={country.iso3}
              country={country.country}
              iso3={country.iso3}
              code={country.code}
              populationCounts={country.populationCounts}
              classValue={returnColor() ?? ''}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountriesList;
