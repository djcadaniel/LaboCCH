import React from "react";
import '../../../Css/Layout/Home/BloqueEstadisticas.css'
import medico from '../../../img/Icons/medico.svg'
import hospital from '../../../img/Icons/hospital.svg'
// import medico from '../../../img/Icons/medico.svg'
import botiquin from '../../../img/Icons/boriquin.svg'

function BloqueEstadisticas() {
    return(
        <section className="estadisticas">
            <div className="estadisticas__flex">
                <div className="estadisticas__container">
                    <div className="estadisticas__item">
                        <div className="estadisticas__item--img">
                            <img src={medico} alt="" />
                        </div>
                        <div className="estadisticas__item--description">
                            <span className="description__number">161</span> <br />
                            <span className="description__text">ESPECIALISTAS</span>
                        </div>
                    </div>
                    <div className="estadisticas__item">
                        <div className="estadisticas__item--img">
                            <img src={hospital} alt="" />
                        </div>
                        <div className="estadisticas__item--description">
                            <span  className="description__number">40,000</span> <br />
                            <span className="description__text">PACIENTES</span>
                        </div>
                    </div>
                    <div className="estadisticas__item">
                        <div className="estadisticas__item--img">
                            <img src={hospital} alt="" />
                        </div>
                        <div className="estadisticas__item--description">
                            <span className="description__number">45</span> <br />
                            <span className="description__text">ESPECIALIDADES</span>
                        </div>
                    </div>
                    <div className="estadisticas__item">
                        <div className="estadisticas__item--img">
                            <img src={botiquin} alt="" />
                        </div>
                        <div className="estadisticas__item--description">
                            <span className="description__number">78</span> <br />
                            <span className="description__text">SERVICIOS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {BloqueEstadisticas}