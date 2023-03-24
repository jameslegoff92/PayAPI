// Core node modules
const path = require('path');

//Third-party modules
const express = require('express');
// const livereload = require("livereload");
// const connectLivereload = require("connect-livereload");

// Open livereload high port and start to watch public directory for changes
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, '../client/public'));

// Ping browser on Express boot, once browser has reconnected and handshaken
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });

const app = express();

// Monkey patch every served HTML so they know of changes
// app.use(connectLivereload());

const port = process.env.PORT || 3000;
const staticFolderPath = path.join(__dirname, "../client/public");
const pathToNodeModules = path.join(__dirname, "../client/node_modules");
const pathToServer = path.join(__dirname, '../node_modules');

console.log(__dirname);
app.use(express.static(staticFolderPath));
app.use(express.static(pathToNodeModules));
app.use(express.static(pathToServer));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views')) 

//Import Routes 
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const pricingRoute = require('./routes/pricing');
const contactRoute = require('./routes/contact');

app.use(indexRoute);
app.use(aboutRoute);
app.use(pricingRoute);
app.use(contactRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})