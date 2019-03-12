const proxy = require('http-proxy-middleware');
const cors = require('cors');

module.exports = function(app) {
  app.use(proxy('/api/*', { target: 'http://35.154.78.152:7777', changeOrigin: true})),
  app.use(proxy('/auth', { target: 'http://localhost:3000', changeOrigin: true})),
  app.use(cors({origin: 'http://localhost:3000', credentials: true }));
  app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); }); 
}