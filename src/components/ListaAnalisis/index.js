import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../../Css/Layout/AnalisisLista/ListaAnalisis.css'
// import { isCursorAtStart } from "@testing-library/user-event/dist/utils";

const defaultLetters = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
]

function ListaAnalisis() {
    
    const [analisis, setAnalisis] = useState([]);

    const [letters, setLetters] = useState(defaultLetters);
    const [searchValue, setSearchValue] = useState('');
    
    
    useEffect(()=>{
        const getAnalisis = async () => {
            try{
                const resAnalisis = await axios("https://jsonplaceholder.typicode.com/users/");
                setAnalisis(resAnalisis.data)
            }catch(err){
                console.log(err)
            }
        }
            getAnalisis();
        }, [])

    const onSearchValueChange = (event) =>{
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    let searchedAnalisis =[];

    if(!searchValue.length >=1){
        searchedAnalisis = analisis;
    }else{
        searchedAnalisis = analisis.filter(item => {
            const itemText = item.name.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return itemText.includes(searchText)
        })
    }

    return(
        <section className="analisisLista">
            <div className="analisis__menu">
                    {letters.map((item,index)=>(
                        <div className="menu__item--letter" key={index}>
                            <a href="#/"><p >{item}</p></a>
                        </div>
                    ))}
            </div>
            <div className="analisis__contain">
                <h1>Todos los Análisis</h1>
                <form className="contain__input">
                    <label>
                        <p> Buscar: </p>
                        <input 
                            className="contain__input--search" 
                            type="text" 
                            placeholder="Ingresar..."
                            onChange={onSearchValueChange}
                            value={searchValue}
                        />
                    </label>
                </form>
                <div className="contain__frame">
                        <div className="frame__analisis">
                            <h2>Análisis</h2>
                            {
                                searchedAnalisis.map(item=>(
                                    <div key={item.id}>
                                        <p>{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="frame__info">
                            <h2>Información</h2>
                            <div className="frame__info--btn">
                            {
                                searchedAnalisis.map(item=>(
                                    <div key={item.id}>
                                        <p>{item.name}</p>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export {ListaAnalisis}