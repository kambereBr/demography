import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Demography from './Demography';

describe('Render Demography correctly', () => {
  it('Render Demography Screen correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Demography
            year={2018}
            populationCounts={1929294}
          />
        </MemoryRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
