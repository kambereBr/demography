import React from 'react';
import { PropTypes } from 'prop-types';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import '../../assets/css/Demography.css';

const Demography = ({ year, populationCounts }) => (
  <div className="demography-card">
    <div className="demography-content">
      <span>{year}</span>
    </div>
    <div className="demography-content">
      <div className="demography-right-content">
        <span className="demography-population">{populationCounts}</span>
        <span className="demography-row-span"><FaRegArrowAltCircleRight className="demography-row" /></span>
      </div>
    </div>
  </div>
);

Demography.propTypes = {
  year: PropTypes.number.isRequired,
  populationCounts: PropTypes.number.isRequired,
};

export default Demography;
