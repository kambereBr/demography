import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import '../../assets/css/Country.css';

const Country = ({
  iso3, country, code, populationCounts, classValue,
}) => (
  <li className={`country-card ${classValue}`} id={iso3}>
    <Link to={`/details/${iso3}`} className="country-card-row card-link">
      <span>
        <FaRegArrowAltCircleRight className="country-card-icon" />
      </span>
      <div className="country-card-row-content">
        <span className="country-description">{code}</span>
        <span className="country-description">{country}</span>
        <span className="cities-number">{populationCounts}</span>
      </div>
    </Link>
  </li>
);

Country.propTypes = {
  iso3: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  populationCounts: PropTypes.number.isRequired,
  classValue: PropTypes.string.isRequired,
};

export default Country;
