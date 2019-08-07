import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: center;
  border-bottom: 1px solid black;
`;

export default function Header() {
  return (
    <Wrapper>
      <header>
        <h1>Markdown Previewer</h1>
      </header>
    </Wrapper>
  );
}
