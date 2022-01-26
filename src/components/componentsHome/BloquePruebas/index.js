import React from 'react';
import '../../../Css/Layout/Home/BloquePruebas.css'
import adn from '../../../img/pruebas/adn.png'

function BloquePruebas() {
    return(
        <section className="newPruebas">
            <h1>Nuevas pruebas</h1>
            <div className="newPruebas__contain">
                <div className="pruebas__item">
                    <p>Panel completo <br />
                        Antisfosfolípidos</p>
                        <a href="">Ver más</a>
                    <div className="pruebas__item--icon">
                        <img src={adn} alt="" />
                    </div>
                </div>
                <div className="pruebas__item">
                    <p>Panel completo <br />
                        Antisfosfolípidos</p>
                        <a href="">Ver más</a>
                    <div className="pruebas__item--icon">
                        <img src={adn} alt="" />
                    </div>
                </div>
                <div className="pruebas__item">
                    <p>Panel completo <br />
                        Antisfosfolípidos</p>
                        <a href="">Ver más</a>
                    <div className="pruebas__item--icon">
                        <img src={adn} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export {BloquePruebas}