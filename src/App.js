import React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import Header from './Header';
import Input from './Input';
import Output from './Output';
import Footer from './Footer';
import defaultMarkdown from './utils/defaultText';

const Wrapper = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.1fr auto 0.05fr;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    marked.setOptions({
      pedantic: false,
      gfm: true,
      breaks: true,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });

    this.state = {
      htmlCode: ''
    };
  }

  componentDidMount() {
    const html = marked(defaultMarkdown);
    this.setState({ htmlCode: html });
  }

  convertToHtml = ({ target }) => {
    const text = target.value;
    const html = marked(text);
    this.setState({ htmlCode: html });
  };

  render() {
    return (
      <Wrapper className="App">
        <Header />
        <Input
          defaultMarkdown={defaultMarkdown}
          textChanged={this.convertToHtml}
        />
        <Output htmlCode={this.state.htmlCode} />
        <Footer />
      </Wrapper>
    );
  }
}
