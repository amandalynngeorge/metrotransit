const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://svc.metrotransit.org/NexTrip',
      changeOrigin: true,
    })
  );
};