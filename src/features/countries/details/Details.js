import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { getCountryByIso3, fetchCountries } from '../countriesSlice';
import Demography from '../../demography/Demography';
import '../../../assets/css/Details.css';

const Details = () => {
  const { iso3 } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  const details = useSelector((state) => getCountryByIso3(state, iso3));
  const recentDemography = details ? details.demography[details.demography.length - 1].value : 0;

  return (
    <div className="details-container">
      <div className="details-header">
        <div className="details-header-info">
          <span className="country-code">{details?.code}</span>
          <span className="country-name">{details?.country}</span>
          <span className="country-population">{`${recentDemography} people`}</span>
        </div>
        <div className="demography-details">
          <span>DEMOGRAPHY DETAILS</span>
        </div>
      </div>
      <div>
        <ul className="demography-list">
          {details && (details.demography.map((demography) => (
            <Demography
              key={uuidv4()}
              year={demography.year}
              populationCounts={demography.value}
            />
          )))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
