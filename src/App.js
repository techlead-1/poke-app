import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import PokeApp from './Poke';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/pokemons' element={<PokeApp />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
