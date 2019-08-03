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
  render() {
    return (
      <Wrapper className="App">
        <Header />
        <Input />
        <Output />
        <Footer />
      </Wrapper>
    );
  }
}
