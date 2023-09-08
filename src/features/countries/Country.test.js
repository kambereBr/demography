import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Country from './Country';

describe('Render Country correctly', () => {
  it('Render Country Screen correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Country
            iso3="UGA"
            country="Uganda"
            code="UGA"
            populationCounts={42723139}
            classValue="dark"
          />
        </MemoryRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
