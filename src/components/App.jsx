import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board/Board';

const App = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Board />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
