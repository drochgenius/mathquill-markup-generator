# mathquill-markup-generator

Tiny library to generate MathQuill markup on the server

## Installation

Requires at least Node 8 LTS and NPM 5.

```shell
npm install --save mathquill-markup-generator
```

## Usage

```javascript 
const { tex2html } = require('mathquill-markup-generator');

(async () => {
    const latex = '\\frac{1}{2}x^3';
    const html = await tex2html(latex);
});

```