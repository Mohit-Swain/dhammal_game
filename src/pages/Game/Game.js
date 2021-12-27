import React from 'react';
import Slideshow from '../../containers/SlideShow/SlideShow';

const Game = () => {
  return (
    <div className="h-screen bg-cyan-100 ">
      THIS IS A GAME
      <div className="flex justify-center">
        <div className="w-80 h-64">
          <Slideshow />
        </div>
      </div>
    </div>
  );
};

export default Game;
