import React from 'react';
import PropTypes from 'prop-types';

const FilterCountries = ({
  filterEvent,
}) => (
  <div className="filter-container">
    <select onChange={filterEvent}>
      <option value="" selected>Display All</option>
      <option value="A-E">A to E</option>
      <option value="F-J">F to J</option>
      <option value="K-O">K to O</option>
      <option value="P-T">P to T</option>
      <option value="U-Z">U to Z</option>
    </select>
  </div>
);

FilterCountries.propTypes = {
  filterEvent: PropTypes.func.isRequired,
};

export default FilterCountries;
