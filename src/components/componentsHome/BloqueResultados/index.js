import React, {useEffect} from "react";
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
                        <a href="">Pacientes</a>
                    </div>
                </div>
                <div className="resultados__item" data-aos="flip-left">
                    <img src={doc} alt="" /><br />
                    <a href="">Doctores</a>
                </div>
                <div className="resultados__item" data-aos="flip-left">
                    <img src={emp} alt="" /><br />
                    <a href="">Empresas</a>
                </div>
            </div>
        </section>
    )
}

export {BloqueResultados}