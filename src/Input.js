import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border-right: 1px solid black;
  padding: 10px;
`;

export default class Input extends Component {
  render() {
    return (
      <Section className="inputSection">
        <TextArea
          id="editor"
          autoFocus
          value={this.props.defaultMarkdown}
          onChange={this.props.textChanged}
        ></TextArea>
      </Section>
    );
  }
}
