import React, { useState, useEffect } from 'react';

import { Container, Stars } from '../styles/pages/membersTest';

function MembersTest() {
  const [starsNumber, setStarsNumber] = useState([]);

  const getRandom = (value, initialValue) => {
    return Math.floor(Math.random() * value) + initialValue;
  };

  useEffect(() => {
    for (let i = 0; i < 200; i += 1) {
      setStarsNumber((starsNumber) => [...starsNumber, i]);
    }
  }, []);
  return (
    <Container>
      {starsNumber.map((item) => (
        <Stars
          left={`${getRandom(window.innerWidth, 1)}px`}
          top={`${getRandom(window.innerHeight, 1)}px`}
          size={`${getRandom(5, 1)}px`}
          shineTime={`${getRandom(10, 2)}s`}
          key={item}
        />
      ))}
      <section className="starter">
        <button type="button">Start</button>
      </section>
    </Container>
  );
}

export default MembersTest;
