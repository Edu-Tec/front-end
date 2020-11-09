import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

import { Container, Stars, Start } from '../styles/parallaxBackground';

// eslint-disable-next-line react/prop-types
function MembersTest({ children, amount, button, friction, outEffect }) {
  const [starsNumber, setStarsNumber] = useState([]);
  const calc = (x, y) => [
    // eslint-disable-next-line no-undef
    x - window.innerWidth / 2,
    // eslint-disable-next-line no-undef
    y - window.innerHeight / 2,
  ];
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
  // const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
  const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
  // const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: friction || 450 },
  }));

  const getRandom = (value, initialValue) => {
    return Math.floor(Math.random() * value) + initialValue;
  };

  useEffect(() => {
    for (let i = 0; i < amount; i += 1) {
      setStarsNumber((starsNumberVar) => [...starsNumberVar, i]);
    }
  }, [amount]);
  return (
    <Container>
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
              shinetime={`${getRandom(10, 2)}s`}
              key={item}
            />
          ))}
          {button ? (
            <Link style={{ textDecoration: 'none' }} to="/map">
              <Start
                type="button"
                style={{ transform: props.xy.interpolate(trans1) }}
              >
                {children}
              </Start>
            </Link>
          ) : (
            !outEffect && children
          )}
        </animated.div>

        {outEffect && children}
      </section>
    </Container>
  );
}

export default MembersTest;
