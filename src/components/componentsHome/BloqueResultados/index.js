import React from "react";
import '../../../Css/Layout/Home/BloqueResultados.css'
import pac from '../../../../src/img/Resultados/pacientesIcon.svg'
import doc from '../../../../src/img/Resultados/medicosIcon.svg'
import emp from '../../../../src/img/Resultados/empresasIcon.svg'

function BloqueResultados() {
    return(
        <section className="resultados" id="resultados">
            <h1>Resultados</h1>
            <div className="resultados__container" data-aos="fade-up">
                <div className="resultados__item" data-aos="flip-left">
                    <img src={pac} alt="" /><br />
                    <div className="item__description">
                        <a href="https://cch.results.ingenius.online" target="_blank" rel="noopener noreferrer">Pacientes</a>
                    </div>
                </div>
                <div className="resultados__item" data-aos="flip-left">
                    <img src={doc} alt="" /><br />
                    <div className="item__description">
                        <a href="https://cch.results.ingenius.online" target="_blank" rel="noopener noreferrer">Doctores</a>
                    </div>
                </div>
                <div className="resultados__item" data-aos="flip-left">
                    <img src={emp} alt="" /><br />
                    <div className="item__description">
                        <a href="https://cch.results.ingenius.online" target="_blank" rel="noopener noreferrer">Empresas</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {BloqueResultados}