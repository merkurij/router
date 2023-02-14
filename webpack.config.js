const path = require('path');

module.exports = {
    entry: './src/Router.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'router.min.js',
        library: "url-based-router",
    },
};