import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 10px;
  padding: 5px;
`;

export default function ToolbarButton(props) {
  return <Button onClick={props.onClick}>{props.text}</Button>;
}
