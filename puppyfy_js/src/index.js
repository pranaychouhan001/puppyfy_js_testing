import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
// index.js or App.js
import 'leaflet/dist/leaflet.css';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
