# MathQuill Markup Generator

Tiny library to parse a LaTeX string with [MathQuill](http://mathquill.com/) and generate the associated HTML markup on the server side.

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
})();

```