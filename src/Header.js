import React from 'react';
import Toolbar from './Toolbar';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flew-flow: row wrap;
  justify-content: space-around;
  border-bottom: 1px solid black;
`;

const H1 = styled.h1`
  margin: 10px 60px 10px 60px;
`;

export default function Header(props) {
  return (
    <Wrapper>
      <header>
        <H1>Markdown Previewer</H1>
      </header>
      <Toolbar
        clearInput={props.clearInput}
        toggleCheatSheet={props.toggleCheatSheet}
      />
    </Wrapper>
  );
}
