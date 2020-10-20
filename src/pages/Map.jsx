import React, { useEffect, useState } from 'react';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import planetIcon from '../assets/icons/planetIcon.svg';
import tileLayerImage from '../assets/images/TileLayer.jpg';

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
      setStars([...stars, data]);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <NavBar
        dark
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 999,
          backgroundColor: '#00000030',
        }}
      />
      <Map
        zoomControl={false}
        center={
          stars[Math.floor(Math.random() * stars.length)]
            ? [stars[0].position.latitude, stars[0].position.longitude]
            : [1, 1]
        }
        zoom={15}
        minZoom={5}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <TileLayer url={tileLayerImage} />

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
                {star.nome}
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </Container>
  );
}

export default MapApp;
