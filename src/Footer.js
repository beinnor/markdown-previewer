import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  grid-area: 4 / 1 / 5 / 3;
  text-align: center;
  border-top: 1px solid black;
`;

export default function Footer() {
  return (
    <Wrapper>
      <footer>
        by <a href="http://beinnor.github.io/">Beinnor</a> 2019
      </footer>
    </Wrapper>
  );
}
