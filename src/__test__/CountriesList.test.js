import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CountriesList from '../components/countries/CountriesList';

describe('Render CountriesList correctly', () => {
  it('Render CountriesList Screen correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <CountriesList />
        </MemoryRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
