import React from "react";
import {NavLink} from 'react-router-dom';
import '../../../Css/Layout/Home/BloqueAnalisis.css'
import anali from '../../../../src/img/Icons/analisis.svg'

function BloqueAnalisis() {
    return(
        <section className="analisis" id="analisis">
            <h1>Análisis</h1>
            <div className="analisis__container" data-aos="fade-up">
                <div className="analisis__texto" data-aos="flip-left">
                    <p>Tenemos gran cantidad de análisis, explora los que deseas saber:</p>
                    <NavLink to="/ListaAnalisis">Ver</NavLink>
                    <div className="analisis__item">
                        <img src={anali} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export {BloqueAnalisis}