import React from 'react';
import styled from 'styled-components';
import marked from 'marked';

const Section = styled.section`
  width: 100%;
  padding: 10px;
`;

export default function Output(props) {
  marked.setOptions({
    gfm: true,
    breaks: true
  });

  const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  return (
    <Section
      className="outputSection"
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(props.inputText, { renderer })
      }}
    ></Section>
  );
}
