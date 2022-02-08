import React, {useEffect } from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css"

import { NavBar } from '../components/ComponentsShared/NavBar'
import { Home } from '../Pages/Home'; 
import { Analisis } from '../Pages/Analisis'
import { Resultados } from '../Pages/Resultados'
import { Sede } from '../Pages/Sede'
import { Footer } from '../components/ComponentsShared/Footer';
import {ScrollTop} from '../components/ComponentsShared/ScrollTop';
import { ListaAnalisis } from '../components/ListaAnalisis';


function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  

  return (
    <Router>
      <ScrollTop>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/analisis' element={<Analisis />} />
            <Route path='/resultados' element={<Resultados />} />
            <Route path='/sede' element={<Sede />} />
            <Route path='/listaAnalisis' element={<ListaAnalisis />} />
        </Routes> 
        <Footer />
      </ScrollTop>
    </Router>
  );
}

export default App;
