import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { VscDebugStart } from 'react-icons/vsc';

import { Container, Stars, Start } from '../styles/pages/membersTest';

function MembersTest() {
  const [starsNumber, setStarsNumber] = useState([]);
  const [index, setIndex] = useState(0);
  const history = useHistory();
  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
  const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
  const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 450 },
  }));

  const getRandom = (value, initialValue) => {
    return Math.floor(Math.random() * value) + initialValue;
  };

  useEffect(() => {
    setIndex(getRandom(4, 1));
    for (let i = 0; i < 100; i += 1) {
      setStarsNumber((starsNumberVar) => [...starsNumberVar, i]);
    }
  }, []);
  return (
    <Container>
      <span>Astrotech</span>
      <section
        className="starter"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          className="starsBox"
          style={{ transform: props.xy.interpolate(trans3) }}
        >
          {starsNumber.map((item) => (
            <Stars
              left={`${getRandom(window.innerWidth, 1)}px`}
              top={`${getRandom(window.innerHeight, 1)}px`}
              size={`${getRandom(5, 1)}`}
              shineTime={`${getRandom(10, 2)}s`}
              key={item}
            />
          ))}
          <Start
            type="button"
            style={{ transform: props.xy.interpolate(trans1) }}
            onClick={() => history.push('/map')}
          >
            Start <VscDebugStart />
          </Start>
        </animated.div>
      </section>
    </Container>
  );
}

export default MembersTest;
