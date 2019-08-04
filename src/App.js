import React from 'react';
import Header from './Header';
import Input from './Input';
import Output from './Output';
import Footer from './Footer';
import styled from 'styled-components';

const Wrapper = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.1fr auto 0.05fr;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      htmlCode: ''
    };
  }

  updateMarkdownCode = ({ target }) => {
    // TODO: convert target.value here into HTML
    this.setState({ htmlCode: target.value });
  };

  render() {
    return (
      <Wrapper className="App">
        <Header />
        <Input textChanged={this.updateMarkdownCode} />
        <Output htmlCode={this.state.htmlCode} />
        <Footer />
      </Wrapper>
    );
  }
}
