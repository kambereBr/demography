import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import NavBar from '../components/navbar/NavBar';

describe('Render NavBar correctly', () => {
  it('Render NavBar Screen correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
