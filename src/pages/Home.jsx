import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import { FiArrowRightCircle, FiUsers } from 'react-icons/fi';

import '../styles/pages/home.css';

const Home = () => {
  function handleEnterDevs() {
    $('#icon').addClass('fix');
  }

  function handleLeaveDevs() {
    $('#icon').removeClass('fix');
  }

  return (
    <div className="container">
      <Link to="/developers">
        <span id="goDevelopers" onMouseEnter={handleEnterDevs} onMouseLeave={handleLeaveDevs}>
          <FiUsers
            size={24}
            color="black"
            id="icon"
          />
          <label id="integrantes">Integrantes</label>
        </span>
      </Link>

      <div className="title-container">
        <h1 id="title">Cosmologia</h1>
        <p>
          <i>Para os amantes estelares ...</i>
        </p>
        <Link to="/app">
          <FiArrowRightCircle
            size={48}
            id="start"
            stroke="white"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;