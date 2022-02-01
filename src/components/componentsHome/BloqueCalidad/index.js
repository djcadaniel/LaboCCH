import React from "react";
import '../../../Css/Layout/Home/BloqueCalidad.css'
import calidad from '../../../img/calidad.png';

function BloqueCalidad() {
    return(
        <section className="calidad">
            <h1>Calidad</h1>
            <div className="calidad__description">
                <p>Proporcionamos a nuestros pacientes y usuarios una excelente atención, calidad,  oportunidad y confiabilidad en nuestros reultados.</p><br />
                <a href="">Política de calidad</a>
            </div>
            <div className="calidad__imagen" data-aos="zoom-in">
                <img src={calidad} alt="" />
            </div>
        </section>        
    )
}

export {BloqueCalidad}