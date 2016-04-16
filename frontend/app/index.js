import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes.js';
var css = require('./stylesheets/style.css');


ReactDOM.render(
  routes,
  document.getElementById('app')
);
