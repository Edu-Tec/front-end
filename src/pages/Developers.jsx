import React from 'react';

// Importando LINK para utilizar como tag A com href

import { Link } from 'react-router-dom';

// Importando ícone de volta

import { FiArrowLeft } from 'react-icons/fi';

// Importando o CSS

import '../styles/pages/developers.css';

// Página Developers

const Developers = () => {
  return (
    <div className="content-wrapper">
      <div className="containerDev">
        <Link to="/">
          <span id="goHome">
            <FiArrowLeft
              size={24}
              color="white"
            />
          </span>
        </Link>
        <div className="title">
          <h1>Integrantes</h1>
        </div>
        <span id="goAhead"></span>
        <div className="content">
          <div className="dev">
          <img src="http://www.justificando.com/wp-content/uploads/2018/01/Por-que-tenho-orgulho-de-ser-um-homem-negro.jpg" alt={""}/>
            <p>
              Vitor - Desenvolvedor full stack,
              além de matemático e químico nas horas vagas.
              Desbravador há 3 anos. 16 anos de pura de sedução.
            </p>
          </div>
          <div className="dev">
          <img src="http://www.justificando.com/wp-content/uploads/2018/01/Por-que-tenho-orgulho-de-ser-um-homem-negro.jpg" alt={""}/>
            <p>
              Vitor - Desenvolvedor full stack,
              além de matemático e químico nas horas vagas.
              Desbravador há 3 anos. 16 anos de pura de sedução.
            </p>
          </div>
        </div>
      </div>
      <div className="containerDev">
        <div className="title">
          <h1>Integrantes</h1>
        </div>
        <span id="goAhead"></span>
        <div className="content">
          <div className="dev">
            <img src="http://www.justificando.com/wp-content/uploads/2018/01/Por-que-tenho-orgulho-de-ser-um-homem-negro.jpg" alt={""}/>
              <p>
                Vitor - Desenvolvedor full stack,
                além de matemático e químico nas horas vagas.
                Desbravador há 3 anos. 16 anos de pura de sedução.
              </p>
          </div>
          <div className="dev">
            <img src="http://www.justificando.com/wp-content/uploads/2018/01/Por-que-tenho-orgulho-de-ser-um-homem-negro.jpg" alt={""}/>
              <p>
                Vitor - Desenvolvedor full stack,
                além de matemático e químico nas horas vagas.
                Desbravador há 3 anos. 16 anos de pura de sedução.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developers;