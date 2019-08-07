import React from 'react';
import './board.scss';
import BoardBackgroundSquare from '../BoardBackgroundSquare/BoardBackgroundSquare';

const Board = () => {
  let grid = [];
  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 20; j++) {
      row.push('');
    }
    grid.push(row);
  }

  return (
    <div className="board">
      <div>
        {grid.map((column, index) => (
          <div key={index}>
            {column.map((row, index) => (
              <BoardBackgroundSquare key={index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
