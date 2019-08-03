import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  padding: 10px;
`;

export default class Output extends Component {
  render() {
    return (
      <Section className="outputSection" id="preview">
        <h1>Output</h1>
      </Section>
    );
  }
}
