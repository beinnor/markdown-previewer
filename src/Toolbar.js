import React from 'react';
import ToolbarButton from './ToolbarButton';
import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

export default function Toolbar(props) {
  return (
    <Wrapper>
      <ToolbarButton text="Clear" onClick={props.clearInput} />
      <ToolbarButton text="CheatSheet" onClick={props.toggleCheatSheet} />
    </Wrapper>
  );
}
