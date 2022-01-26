import React from 'react';
import ReactDOM from "react-dom";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

import { NavBar } from '../components/ComponentsShared/NavBar'
import { Home } from '../Pages/Home'; 
import { Analisis } from '../Pages/Analisis'
import { Resultados } from '../Pages/Resultados';
import { Footer } from '../components/ComponentsShared/Footer';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/analisis' element={<Analisis />} />
          <Route path='/resultados' element={<Resultados />} />
      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
