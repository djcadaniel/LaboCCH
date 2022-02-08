import React, { useEffect } from "react";
import Axios from 'axios';
import '../../Css/Layout/AnalisisLista/ListaAnalisis.css'
 
function ListaAnalisis() {

    const letters = [
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
    ]
    
    const [searchValue, setSearchValue] = React.useState('')

    const Analisis = () =>{
        const [personaje, setPersonaje] = useState([])
        useEffect(()=>{
            Axios.get("https://rickandmortyapi.com/api/character")
            .then(response =>{
                setPersonaje(response.data)

            })
        })
        return(
         personaje   
        )
    }


    return(
        <section className="analisisLista">
            <div className="analisis__menu">
                    {letters.map((item,index)=>(
                        <a href="#" className="menu__item--letter">
                            <p>{item}</p>
                        </a>
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
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
                            <p>Acetil Colina Receptor, actic.</p>
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