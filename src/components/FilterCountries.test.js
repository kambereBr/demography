import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../features/store';
import filters from '../utils/filters';
import countriesData from '../utils/constants';
import FilterCountries from './FilterCountries';

describe('Render FilterCountries correctly', () => {
  const handleFilter = (value) => {
    filters(countriesData, value);
  };

  it('Render FilterCountries Component correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <FilterCountries filterEvent={(e) => handleFilter(e.target.value)} />
        </MemoryRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
