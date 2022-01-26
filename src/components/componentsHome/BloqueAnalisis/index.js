import React from "react";
import '../../../Css/Layout/Home/BloqueAnalisis.css'
import anali from '../../../../src/img/Icons/analisis.svg'

function BloqueAnalisis() {
    return(
        <section className="analisis" id="analisis">
            <h1>Análisis</h1>
            <div className="analisis__container">
                <div className="analisis__texto">
                    <p>Consulta los tipo de análisis que tenemos</p>
                    <a href="">Ver</a>
                    <div className="analisis__item">
                        <img src={anali} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export {BloqueAnalisis}