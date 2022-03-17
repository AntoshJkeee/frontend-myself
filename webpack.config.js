const HTMLWebpackPlugin = require('html-webpack-plugin');

let mode = 'development'
if(process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode: mode,
    plugins: [
        new HTMLWebpackPlugin({
        template: "./src/index.html"
    })],
    module: {
        rules: []
    }

}