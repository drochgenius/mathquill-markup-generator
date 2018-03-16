const { promisify } = require('util');
const { JSDOM, VirtualConsole } = require('jsdom');
const html = require('./templates/html');

function processMath(math, callback) {
    const virtualConsole = new VirtualConsole();

    virtualConsole.on('log', markup => {
        callback(null, markup);
    });

    new JSDOM(html(math), {
        virtualConsole,
        resources: 'usable',
        runScripts: 'dangerously'
    });
}

const mathToHTML = promisify(processMath);

module.exports = { mathToHTML };
