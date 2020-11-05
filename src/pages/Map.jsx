/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, /* TileLayer, */ Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import { FiArrowRight } from 'react-icons/fi';

// import tileLayerImage from '../assets/images/TileLayer.jpg';

import { Container } from '../styles/pages/map';
import NavBar from '../components/pages/NavBar';

import whiteDwarf from '../assets/planets/ana_branca.PNG';
import blackHole from '../assets/planets/buraco_negro.png';
import blueStar from '../assets/planets/neutron_and_blue.png';
import planetaryNebula from '../assets/planets/planetary_nebula.png';
import redGiant from '../assets/planets/red_giant.png';
import normalStar from '../assets/planets/small_and_big_star.png';
import superRedGiant from '../assets/planets/super_red_giant.png';
import superNova from '../assets/planets/supernova.png';
import image404 from '../assets/planets/undefined.webp';

import api from '../services/api';

function MapApp() {
  const [stars, setStars] = useState([]);

  const mapIcon = {
    icon1: Leaflet.icon({
      iconUrl: whiteDwarf,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -60],
    }),
    icon2: Leaflet.icon({
      iconUrl: blackHole,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -60],
    }),
    icon3: Leaflet.icon({
      iconUrl: blueStar,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -60],
    }),
    icon4: Leaflet.icon({
      iconUrl: planetaryNebula,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -60],
    }),
    icon5: Leaflet.icon({
      iconUrl: redGiant,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -60],
    }),
    icon6: Leaflet.icon({
      iconUrl: normalStar,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -60],
    }),
    icon7: Leaflet.icon({
      iconUrl: superRedGiant,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -60],
    }),
    icon8: Leaflet.icon({
      iconUrl: superNova,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -60],
    }),
    icon9: Leaflet.icon({
      iconUrl: image404,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -60],
    }),
  };

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
        center={[0, 0]}
        zoom={6}
        minZoom={4.5}
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
              icon={(() => {
                switch (star.infos.tipo) {
                  case 'Anã branca':
                    return mapIcon.icon1;
                  case 'Anã vermelha':
                    return mapIcon.icon5;
                  case 'Buraco negro':
                    return mapIcon.icon2;
                  case 'Estrela de nêutrons':
                    return mapIcon.icon3;
                  case 'Estrela azul':
                    return mapIcon.icon3;
                  case 'Gigante azul':
                    return mapIcon.icon3;
                  case 'Supergigante azul':
                    return mapIcon.icon3;
                  case 'Nebulosa planetária':
                    return mapIcon.icon4;
                  case 'Gigante vermelha':
                    return mapIcon.icon5;
                  case 'Estrela amarela':
                    return mapIcon.icon6;
                  case 'Gigante amarela':
                    return mapIcon.icon6;
                  case 'Supergigante amarela':
                    return mapIcon.icon6;
                  case 'Super gigante vermelha':
                    return mapIcon.icon7;
                  case 'Supernova':
                    return mapIcon.icon8;
                  default:
                    return mapIcon.icon9;
                }
              })()}
              position={[star.position.latitude, star.position.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                <img
                  src={(() => {
                    switch (star.infos.tipo) {
                      case 'Anã branca':
                        return whiteDwarf;
                      case 'Anã vermelha':
                        return redGiant;
                      case 'Buraco negro':
                        return blackHole;
                      case 'Estrela de nêutrons':
                        return blueStar;
                      case 'Estrela azul':
                        return blueStar;
                      case 'Gigante azul':
                        return blueStar;
                      case 'Supergigante azul':
                        return blueStar;
                      case 'Nebulosa planetária':
                        return planetaryNebula;
                      case 'Gigante vermelha':
                        return redGiant;
                      case 'Estrela amarela':
                        return normalStar;
                      case 'Gigante amarela':
                        return normalStar;
                      case 'Supergigante amarela':
                        return normalStar;
                      case 'Super gigante vermelha':
                        return superRedGiant;
                      case 'Supernova':
                        return superNova;
                      default:
                        return image404;
                    }
                  })()}
                  alt={star.nome}
                />
                {star.nome}
                {/* eslint-disable-next-line no-underscore-dangle */}
                <Link style={{ color: 'black' }} to={`/astro/${star._id}`}>
                  <FiArrowRight size={32} />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </Container>
  );
}

export default MapApp;
