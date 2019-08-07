import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Toolbar from './Toolbar';
import Input from './Input';
import Output from './Output';
import CheatSheet from './CheatSheet';
import Footer from './Footer';
import defaultMarkdown from './utils/defaultText';

const Wrapper = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 8.5fr 0.5fr;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markDownText: defaultMarkdown
    };
  }

  convertToHtml = ({ target }) => {
    const text = target.value;
    this.setState({ markDownText: text });
  };

  clearInput = () => {
    this.setState({ markDownText: '' });
  };

  render() {
    return (
      <Wrapper className="App">
        <Header />
        <Toolbar clearInput={this.clearInput} />
        <Input
          defaultMarkdown={this.state.markDownText}
          textChanged={this.convertToHtml}
        />
        <Output inputText={this.state.markDownText} />
        {/*<CheatSheet />*/}
        <Footer />
      </Wrapper>
    );
  }
}
