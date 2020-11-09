/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import { FiArrowRight, FiSearch } from 'react-icons/all';

import { Container } from '../styles/pages/map';
import NavBar from '../components/pages/NavBar';
import ParallaxBackground from '../components/pages/ParallaxBackground';

import whiteDwarf from '../assets/planets/ana_branca.PNG';
import blackHole from '../assets/planets/buraco_negro.png';
import blueStar from '../assets/planets/neutron_and_blue.png';
import planetaryNebula from '../assets/planets/planetary_nebula.png';
import redGiant from '../assets/planets/red_giant.png';
import normalStar from '../assets/planets/small_and_big_star.png';
import superRedGiant from '../assets/planets/super_red_giant.png';
import superNova from '../assets/planets/supernova.png';
import anaMarrom from '../assets/planets/ana_marrom.png';
import anaNegra from '../assets/planets/ana_negra.png';
import anaAmarela from '../assets/planets/ana_amarela.png';
import hiperGiganteAmarela from '../assets/planets/hipergigante_amarela.png';
import image404 from '../assets/planets/undefined.webp';

import api from '../services/api';

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
  icon10: Leaflet.icon({
    iconUrl: anaMarrom,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -60],
  }),
  icon11: Leaflet.icon({
    iconUrl: anaNegra,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -60],
  }),
  icon12: Leaflet.icon({
    iconUrl: anaAmarela,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -60],
  }),
  icon13: Leaflet.icon({
    iconUrl: hiperGiganteAmarela,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -60],
  }),
};

const MapApp = () => {
  const [stars, setStars] = useState([]);
  const [currentCenter, setCurrentCenter] = useState([0, 0]);
  const southWest = Leaflet.latLng(-200, -380);
  const northEast = Leaflet.latLng(200, 380);
  const bounds = Leaflet.latLngBounds(southWest, northEast);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/');
      setStars(data);
      const randomBody = Math.floor(Math.random() * (data.length - 1));
      setCurrentCenter([
        data[randomBody].position.latitude,
        data[randomBody].position.longitude,
      ]);
    })();
  }, []);

  const handleSearchingStars = (e) => {
    const newArray = [];

    stars
      .filter((opa) => {
        return opa.nome.toLowerCase().includes(e.target.value.toLowerCase());
      })
      .map((searchStarsArray) => {
        return newArray.push(searchStarsArray);
      });

    setCurrentCenter(
      // eslint-disable-next-line no-nested-ternary
      e.target.value
        ? newArray[0]
          ? [newArray[0].position.latitude, newArray[0].position.longitude]
          : [0, 0]
        : [0, 0]
    );
  };

  return (
    <>
      <Container style={{ background: 'black' }}>
        <NavBar dark fixed />
        <ParallaxBackground amount={50} friction={800}>
          <Map
            center={currentCenter}
            zoom={3.75}
            minZoom={3.75}
            maxBounds={bounds}
            zoomControl={false}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
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
                      case 'Anã marrom':
                        return mapIcon.icon10;
                      case 'Anã amarela':
                        return mapIcon.icon12;
                      case 'Anã negra':
                        return mapIcon.icon11;
                      case 'Hipergigante amarela':
                        return mapIcon.icon13;
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
                          case 'Anã marrom':
                            return anaMarrom;
                          case 'Anã negra':
                            return anaNegra;
                          case 'Anã amarela':
                            return anaAmarela;
                          case 'Hipergigante amarela':
                            return hiperGiganteAmarela;
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
        </ParallaxBackground>

        <div id="search">
          <FiSearch
            size={25}
            stroke="white"
            onClick={() => {
              switch (
                // eslint-disable-next-line no-undef
                document.querySelector('#search > input[type=search]').style
                  .width
              ) {
                case '0px':
                  // eslint-disable-next-line no-undef
                  document.querySelector(
                    '#search > input[type=search]'
                  ).style.width = window.innerWidth >= 768 ? '20vw' : '85vw';
                  // eslint-disable-next-line no-undef
                  document.querySelector(
                    '#search > input[type=search]'
                  ).style.padding = '10px';
                  break;

                default:
                  // eslint-disable-next-line no-undef
                  document.querySelector(
                    '#search > input[type=search]'
                  ).style.width = 0;
                  // eslint-disable-next-line no-undef
                  // eslint-disable-next-line no-undef
                  document.querySelector(
                    '#search > input[type=search]'
                  ).style.padding = 0;
              }
            }}
          />
          <input type="search" onChange={handleSearchingStars} />
        </div>
      </Container>
    </>
  );
};

export default MapApp;
