const assert = require('assert');
const { tex2html } = require('../index');

describe('mathquill markup generator', () => {
    it('should return markup when parsing LaTeX equation', async () => {
        const html = await tex2html('y_0 = x^3 - 2x^2 + x');
        console.log(html);
    });

    it('should return markup when parsing LaTeX equation', async () => {
        const html = await tex2html('\\frac{2}{5}');
        console.log(html);
    });
});