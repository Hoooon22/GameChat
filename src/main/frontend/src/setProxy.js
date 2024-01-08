const { createProxyMiddeleware } = require('http-proxy-middeleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddeleware({
            target: 'http://localhost:8080',
            changeOrigin:true,
        })
    )
}