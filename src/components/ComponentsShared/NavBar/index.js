import React from "react";
import { NavLink} from 'react-router-dom';

import '../../../Css/Layout//shared/NavBar.css'
import logo from '../../../img/Logo/logo.png'



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
    // const getPosition = ()=>{
    //     var position = window.scrollTo(0,647);
    //     console.log(position)
    // }

    return(
            <header className="header">
                <nav className="header__nav">
                    <div className="nav__logo">
                        <NavLink className="nav__logo" to="/">
                            <img className="nav__logo--img" src={logo} alt="" />
                        </NavLink>
                        <div className="logo__title">
                            <span className="logo__title--text">Laboratorio Clínico</span>
                            <span className="logo__title--text">Tu Clínica de Siempre</span>
                        </div>
                    </div>
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
                            to="/resultados"
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
                        <NavLink className={` nav__menu--item ${itemMenu ? document.getElementById("menu").classList.remove("visible") : "hola"}`}
                            onClick={showItemMenu}
                            to="/sede"
                        >
                            <i className="fas fa-map-marker-alt"></i> 
                                Sede
                        </NavLink>
                    </div>
                </nav>
                {/* <Outlet /> */}
            </header>
            
        
    )
}

export {NavBar}