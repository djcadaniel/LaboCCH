import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../../Css/Layout/AnalisisLista/ListaAnalisis.css'
// import { isCursorAtStart } from "@testing-library/user-event/dist/utils";
 
function ListaAnalisis() {

    const letters = [
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
    ]
    
    const [analisis, setAnalisis] = useState([])
    
    useEffect(()=>{
        const getAnalisis = async () => {
            const resAnalisis = await axios.get("https://jsonplaceholder.typicode.com/users/");
            setAnalisis(resAnalisis.data)
        }
        getAnalisis();
    }, [])

    const showList = analisis.map((item) => {
        return <div key={item.id}>
            <h4>Nombre: { item.name }</h4>
            <p>Usuario: { item.username }</p>
        </div>
    })

    return(
        <section className="analisisLista">
            <div className="analisis__menu">
                    {letters.map((item,index)=>(
                        <div className="menu__item--letter" key={index}>
                            <a href="#"><p >{item}</p></a>
                        </div>
                    ))}
            </div>
            <div className="analisis__contain">
                <h1>Todos los Análisis</h1>
                <form className="contain__input">
                    <label>
                        <p> Buscar: </p>
                        <input className="contain__input--search" type="text" placeholder="Ingresar..."/>
                    </label>
                    <input className="contain__input--input" type="submit" value="enviar" />
                </form>
                <div className="contain__frame">
                        <div className="frame__analisis">
                            <h2>Análisis</h2>
                            { showList }
                        </div>
                        <div className="frame__info">
                            <h2>Información</h2>
                            <div className="frame__info--btn">
                                <a                            
                                    href="#"
                                >Ver</a>
                            </div>
                            <div className="frame__info--btn">
                                <a                            
                                    href="#"
                                >Ver</a>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export {ListaAnalisis}