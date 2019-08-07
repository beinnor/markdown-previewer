import React from 'react';
import styled from 'styled-components';
import cheatSheetText from './utils/cheatSheetText';

const Section = styled.section`
  width: 100%;
  padding: 10px;
  border: 1px dotted red;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export default function CheatSheet(props) {
  return <Section visible={props.visible}>{cheatSheetText()}</Section>;
}
