import filterCountries from '../utils/filters';
import countriesData from '../utils/constants';

const responseAE = [
  {
    code: 'ARB',
    country: 'Arab World',
    iso3: 'ARB',
    populationCounts: 419790588,
  },
  {
    code: 'EAS',
    country: 'East Asia & Pacific',
    iso3: 'EAS',
    populationCounts: 2328220870,
  },
];

const responsePT = [
  {
    code: 'PLW',
    country: 'Palau',
    iso3: 'PLW',
    populationCounts: 17907,
  },
];

const responseUZ = [
  {
    code: 'UGA',
    country: 'Uganda',
    iso3: 'UGA',
    populationCounts: 42723139,
  },
];

describe('Filter data correctly', () => {
  it('Filter countries that start by letters A to E', () => {
    expect(filterCountries(countriesData, 'A-E')).toStrictEqual(responseAE);
  });
  it('Filter countries that start by letters P to T', () => {
    expect(filterCountries(countriesData, 'P-T')).toStrictEqual(responsePT);
  });
  it('Filter countries that start by letters U to Z', () => {
    expect(filterCountries(countriesData, 'U-Z')).toStrictEqual(responseUZ);
  });
});
