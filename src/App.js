import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CountriesList from './features/countries/CountriesList';
import Details from './features/countries/details/Details';
import './assets/css/App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/countries" element={<CountriesList />} />
        <Route path="/details">
          <Route path=":iso3" element={<Details />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
