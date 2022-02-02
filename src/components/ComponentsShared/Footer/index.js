import React from "react";
import '../../../Css/Layout/shared/Footer.css'
import logo from '../../../img/Logo/logo.png'

function Footer() {
    return(
        <footer>
            <div className="footer__logo">
                <a className="footer__link" href="/">
                    <img src={logo} alt="" /><br />
                </a>
                <p>Laboratorio Clínico</p>
                <p>Tu Clínica de Siempre</p>
            </div>
            <div className="footer__contain">
                <div className="footer__item">
                    <h2>Resultados</h2>
                    <ul>
                        <li><a href="/#">Pacientes</a></li>
                        <li><a href="/#">Médicos</a></li>
                        <li><a href="/#">Empresas</a></li>
                    </ul>
                </div>
                <div className="footer__item">
                    <h2>Nuestro Laboratorio</h2>
                    <ul>
                        <li><a href="/#">Nosotros</a></li>
                        <li><a href="/#">Trabaja con nosotros</a></li>
                    </ul>
                </div>
                <div className="footer__item">
                    <h2>Análisis</h2>
                    <ul>
                        <li><a href="/#">Consulta de análisis</a></li>
                    </ul>
                </div>
                <div className="footer__item">
                    <h2>Contáctanos</h2>
                    <ul>
                        <li><a href="/#"><i className="fas fa-envelope"></i> laboratorio@gmail.com</a></li>
                        <li><a href="/#"><i className="fas fa-phone-square-alt"></i> 964-526589</a></li>
                        <div className="redes">
                            <ul>
                                <li><a href="/#"><i className="fab fa-facebook-square"></i></a></li>
                                <li><a href="/#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="/#"><i className="fab fa-whatsapp-square"></i></a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="footer__copyRight">
                <p>Laboratorio Clínico CCH <i className="fas fa-copyright"></i> Todos los derechos reservados 2022</p>
            </div>
        </footer>
    )
}

export { Footer }