import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import CountriesList from './components/countries/CountriesList';
import Details from './components/countries/Details';
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
