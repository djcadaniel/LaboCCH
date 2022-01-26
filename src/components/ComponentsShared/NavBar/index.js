import React from "react";
import { NavLink} from 'react-router-dom';

import '../../../Css/Layout//shared/NavBar.css'
import logo from'../../../img/Logo/logo.jpeg'



function NavBar(){
    const[Menu, setMenu] = React.useState(false);
    const[itemMenu, setItemMenu] = React.useState(false);

    const showMenu = ()=>{
    setMenu(!Menu)
    }
    const showItemMenu=()=>{
    setItemMenu(!itemMenu)
    setMenu(!Menu)
    } 
    return(
            <header className="header">
                <nav className="header__nav">
                    <NavLink className="nav__logo" to="/">
                        <img className="nav__logo--img" src={logo} alt="" />
                        Laboratorio CCH
                    </NavLink>
                    <button id="button__menu" 
                        className="nav__menu--hamburguesa "
                        onClick={showMenu}
                    >
                        <div className="raya1"></div>
                        <div className="raya2"></div>
                        <div className="raya3"></div>
                    </button>
                    <div className={`nav__menu ${Menu ? "visible" : "false"}`} id="menu">
                        <NavLink className={` nav__menu--item ${itemMenu ? document.getElementById("menu").classList.remove("visible") : "hola"}`}
                            to='/'
                            onClick={showItemMenu}
                        >
                            <i className="far fa-hospital"></i> 
                                Inicio
                        </NavLink>
                        <NavLink className={` nav__menu--item ${itemMenu ? document.getElementById("menu").classList.remove("visible") : "hola"}`}
                            to='/resultados'
                            onClick={showItemMenu}
                        >
                            <i className="fas fa-book-medical"></i> 
                                Resultados
                        </NavLink>
                        <NavLink className={` nav__menu--item ${itemMenu ? document.getElementById("menu").classList.remove("visible") : "hola"}`}
                            to='/analisis'
                            onClick={showItemMenu}
                        >
                            <i className="fas fa-user-md"></i> 
                                Análisis
                        </NavLink>
                        <a className={` nav__menu--item ${itemMenu ? document.getElementById("menu").classList.remove("visible") : "hola"}`}
                            onClick={showItemMenu}
                            href="#sede"
                        >
                            <i className="fas fa-map-marker-alt"></i> 
                                Sede
                        </a>
                    </div>
                </nav>
                {/* <Outlet /> */}
            </header>
            
        
    )
}

export {NavBar}