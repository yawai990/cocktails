import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import AddCocktail from './component/AddCocktail';
import { SingleCocktail } from './component/SingleCocktail';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return <BrowserRouter>

    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='SingleCocktail/:id' element={<SingleCocktail />} />
      <Route path='AddCocktail' element={<AddCocktail />} />
    </Routes>

  </BrowserRouter>
}

export default App;
