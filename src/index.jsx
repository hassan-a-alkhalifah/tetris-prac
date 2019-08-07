import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './components/App';

const title = 'Tetris Practice';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app'),
);

/* eslint-disable */
module.hot.accept();
/* eslint-enable */
