import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactInterval from 'react-interval';
import Slide from './Slide';

const Slides = ({ slidesArr, play, counter, setCounter, handlePlayPause }) => {
  const intervalCallBack = () => {
    if (!play) return;
    setCounter(counter + 1);
    if (counter === slidesArr.length) {
      handlePlayPause();
    }
  };

  return (
    <div className="w-full h-full">
      <ReactInterval
        enabled={play}
        timeout={1500}
        callback={intervalCallBack}
      />

      {play ? <Slide>{slidesArr[counter]}</Slide> : <Slide />}
    </div>
  );
};

Slides.propTypes = {
  slidesArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCounter: PropTypes.func.isRequired,
  play: PropTypes.bool.isRequired,
  counter: PropTypes.number.isRequired,
  handlePlayPause: PropTypes.func.isRequired
};
export default Slides;
