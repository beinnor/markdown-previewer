import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Input from './Input';
import Output from './Output';
import CheatSheet from './CheatSheet';
import Footer from './Footer';
import defaultMarkdown from './utils/defaultText';

const Wrapper = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8.5fr 0.5fr;
`;

const WorkArea = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markDownText: defaultMarkdown,
      showCheatSheet: false
    };
  }

  convertToHtml = ({ target }) => {
    const text = target.value;
    this.setState({ markDownText: text });
  };

  clearInput = () => {
    this.setState({ markDownText: '' });
  };

  toggleCheatSheet = () => {
    this.setState(prevState => ({ showCheatSheet: !prevState.showCheatSheet }));
  };

  render() {
    return (
      <Wrapper className="App">
        <Header
          clearInput={this.clearInput}
          toggleCheatSheet={this.toggleCheatSheet}
        />
        <WorkArea>
          <Input
            defaultMarkdown={this.state.markDownText}
            textChanged={this.convertToHtml}
          />
          <CheatSheet visible={this.state.showCheatSheet} />
          <Output inputText={this.state.markDownText} />
        </WorkArea>
        <Footer />
      </Wrapper>
    );
  }
}
