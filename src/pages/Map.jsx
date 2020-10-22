/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, /* TileLayer, */ Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import { FiArrowRight } from 'react-icons/fi';

import planetIcon from '../assets/icons/planetIcon.svg';
// import tileLayerImage from '../assets/images/TileLayer.jpg';

import { Container } from '../styles/pages/map';
import NavBar from '../components/pages/NavBar';

import api from '../services/api';

function MapApp() {
  const [stars, setStars] = useState([]);

  const mapIcon = Leaflet.icon({
    iconUrl: planetIcon,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -60],
  });

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/');
      setStars(...stars, data);
    })();
    // eslint-disable-next-line
  }, []);

  // stars[Math.floor(Math.random() * stars.length)]
  // ? [stars[0].position.latitude, stars[0].position.longitude]
  // : [1, 1]

  return (
    <Container>
      <NavBar dark fixed />
      <Map
        // zoomControl={false}
        center={[0, 0]}
        zoom={2.5}
        minZoom={2.5}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {/* <TileLayer url={backgroundImage} /> */}

        {stars.map((star) => {
          return (
            <Marker
              // eslint-disable-next-line no-underscore-dangle
              key={star._id}
              icon={mapIcon}
              position={[star.position.latitude, star.position.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                <img
                  src={
                    star.url_image ? api.defaults.baseURL + star.url_image : ''
                  }
                  alt={star.nome}
                />
                {star.nome}
                <Link style={{ color: 'black' }} to={`/astro/${star._id}`}>
                  <FiArrowRight size={32} />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
      {/* <div id="kapa" /> */}
    </Container>
  );
}

export default MapApp;
