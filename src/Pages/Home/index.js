import React from 'react';
import { TinySlider2 } from '../../components/Slider/TinySlider2'
import {BloqueResultados} from '../../components/componentsHome/BloqueResultados'
import { BloqueAnalisis } from '../../components/componentsHome/BloqueAnalisis';
import { BloqueEstadisticas } from '../../components/componentsHome/BloqueEstadisticas';
import { BloqueCalidad } from '../../components/componentsHome/BloqueCalidad';
import { BloquePruebas } from '../../components/componentsHome/BloquePruebas';
import { BloqueSede } from '../../components/componentsHome/BloqueSede';

function Home() {
  return(
    <div>
        <TinySlider2 />
        <BloqueResultados />
        <BloqueAnalisis />
        <BloqueEstadisticas />
        <BloqueCalidad />
        <BloquePruebas />
        <BloqueSede />
    </div>
  )
}

export { Home }
