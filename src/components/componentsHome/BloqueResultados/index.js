import React from "react";
import '../../../Css/Layout/Home/BloqueResultados.css'
import pac from '../../../../src/img/Resultados/pacientesIcon.svg'
import doc from '../../../../src/img/Resultados/medicosIcon.svg'
import emp from '../../../../src/img/Resultados/empresasIcon.svg'

function BloqueResultados() {
    return(
        <section className="resultados" id="resultados">
            <h1>Resultados</h1>
            <div className="resultados__container">
                <div className="resultados__item">
                    <img src={pac} alt="" /><br />
                    <a href="">Pacientes</a>
                </div>
                <div className="resultados__item">
                    <img src={doc} alt="" /><br />
                    <a href="">Doctores</a>
                </div>
                <div className="resultados__item">
                    <img src={emp} alt="" /><br />
                    <a href="">Empresas</a>
                </div>
            </div>
        </section>
    )
}

export {BloqueResultados}