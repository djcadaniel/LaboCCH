import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Css/Layout/AnalisisLista/ListaAnalisis.css";
// import { isCursorAtStart } from "@testing-library/user-event/dist/utils";

const defaultLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function ListaAnalisis() {
  const [analisis, setAnalisis] = useState([]);
  const [db, setDb] = useState([]);

  useEffect(() => {
    const getAnalisis = async () => {
      try {
        const resAnalisis = await axios(
          "https://jsonplaceholder.typicode.com/users/"
        );
        setAnalisis([...resAnalisis.data]);
        setDb([...resAnalisis.data]);
      } catch (err) {
        console.log(err);
      }
    };
    getAnalisis();
  }, []);

  const filterElements = (letter) => {
    const filtered = db.filter((e) =>
      e.name.toLowerCase().includes(letter.toLowerCase())
    );
    setAnalisis([...filtered]);
  };

  const firstLetter = (letter) =>{
    const minLetter = letter.toLowerCase();
    const firstNameLetter = db.filter((e) =>
      e.name.charAt(0).toLowerCase() == minLetter
    )
    setAnalisis([...firstNameLetter])
  }

  return (
    <section className="analisisLista">
      <div className="analisis__menu">
        {defaultLetters.map((item, index) => (
          <div className="menu__item--letter" key={index}>
            <a type="submit" onClick={() => firstLetter(item)}>
              {item}
            </a>
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
              onChange={(e) => filterElements(e.target.value)}
            />
          </label>
        </form>
        <div className="contain__frame">
          <div className="frame__analisis">
            <h2>Análisis</h2>
            {analisis.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="frame__info">
            <h2>Información</h2>
            <div className="frame__info--btn">
              {analisis.map((item) => (
                <div className="frame__info--ver" key={item.id}>
                  <a>
                    <i className="fa-solid fa-eye"></i>
                    Ver
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ListaAnalisis };
