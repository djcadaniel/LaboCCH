import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "../modal";
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
  const [visibilityModal, setVisibilityModal] = useState(false);
  const [dateModal, setDateModal] = useState();

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
  //Buscador
  const filterElements = (letter) => {
    const filtered = db.filter((e) =>
      e.name.toLowerCase().includes(letter.toLowerCase())
    );
    setAnalisis([...filtered]);
  };
  //Menu-bottones
  const firstLetter = (letter) => {
    const minLetter = letter.toLowerCase();
    const firstNameLetter = db.filter(
      (e) => e.name.charAt(0).toLowerCase() === minLetter
    );
    setAnalisis([...firstNameLetter]);
  };

  const showModal = (id) => {
    const filteredModal = db.filter((e)=>
    e.id === id
    );
    setDateModal(...filteredModal)
    setVisibilityModal(true);
  };

  const closeModal = () => {
      setVisibilityModal(false);
    };
  
  const fillElements = () => {
    const all = db.map(item =>{
      return item.name
    })
    setAnalisis([...all])
  }

  return (
    <section className="analisisLista">
      <div className="analisis__menu">
        {defaultLetters.map((item, index) => (
          <div className="menu__item--letter" key={index}>
            <button onClick={() => firstLetter(item)}>{item}</button>
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
            <div className="titleAnalisis">
              <h2>Análisis</h2>
            </div>
            {analisis.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="frame__info">
            <div className="titleInfo">
              <h2>Información</h2>
            </div>
            <div className="frame__info--btn">
              {analisis.map((item) => (
                <div className="frame__info--ver" key={item.id}>
                  <button onClick={() => showModal(item.id)}>
                    <i className="fa-solid fa-eye"></i>
                    Ver
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        {visibilityModal && (
          <Modal isOpen={showModal} isClose={closeModal}>
            <div className="contain__modal">
              <div className="contain__modal--description">
                <h2 className="title__modal">{dateModal.name}</h2><br />
                <p className="subtitle__modal">Condiciones:</p>
                <p className="valor__modal">{dateModal.id}</p><br />
                <p className="subtitle__modal">Muestra preferida:</p>
                <p className="valor__modal">{dateModal.id}</p><br />
                <p className="subtitle__modal">Protocolo toma muestra:</p>
                <p className="valor__modal">{dateModal.id}</p><br />
                <p className="subtitle__modal">Comentarios:</p>
                <p className="valor__modal">{dateModal.id}</p>
              </div>
              <div className="contain__modal--precio">
                <span className="precioModal">Precio con IGV: S/.</span>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}

export { ListaAnalisis };
