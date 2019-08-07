import React from 'react';

const cheatSheetText = () => {
  return (
    <>
      <h1>CheatSheet</h1>

      <h2>Headings</h2>
      <pre>
        {`# h1 
## h2 
### h3 

Header 1 
========

Header 2 
--------`}
      </pre>

      <h2>Emphasis</h2>
      <pre>
        {`*italic*
_italic_
**bold**
__bold__
\`code\``}
      </pre>

      <h2>Links</h2>
      <pre>
        {`[link](http://google.com)

[link][google]
[google]: http://google.com

<http://google.com>`}
      </pre>

      <h2>Lists</h2>
      <pre>
        {`* Item 1
* Item 2
- Item 1
- Item 2
`}
      </pre>

      <h2>Code</h2>
      <pre>
        {`    4 space indent
    makes a code block
\`\`\`
code fences
\`\`\`

\`\`\`js
codeFences.withLanguage()
\`\`\`
        `}
      </pre>

      <h2>Images</h2>
      <pre>
        {`![Image alt text](/path/to/img.jpg)
![Image alt text](/path/to/img.jpg "title")
![Image alt text][img]

[img]: http://foo.com/img.jpg
`}
      </pre>

      <h2>Blockquotes</h2>
      <pre>
        {`> This is
> a blockquote
>
> > Nested
> > Blockquote
`}
      </pre>

      <h2>Horizontal line</h2>
      <pre>
        {`----

****
`}
      </pre>

      <h2>Tables</h2>
      <pre>
        {`| Column 1 Heading | Column 2 Heading |
| ---------------- | ---------------- |
| Some content     | Other content    |


Column 1 Heading | Column 2 Heading
--- | ---
Some content | Other content
`}
      </pre>
    </>
  );
};

export default cheatSheetText;
