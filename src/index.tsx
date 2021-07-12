import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';

// import App from './chapter1/click-counter/App';
// import App from './chapter1/chanllenge/App';
import MainApp from "./App"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainApp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);