import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  grid-area: 1 / 2 / 3 / 3;
  grid-area: 2 / 1 / 3 / 3;
  text-align: center;
  border-bottom: 1px solid black;
`;

export default function Toolbar() {
  return (
    <Wrapper>
      <div>Toolbar</div>
    </Wrapper>
  );
}
