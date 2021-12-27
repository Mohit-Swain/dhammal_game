import React from 'react';
import PropTypes from 'prop-types';

const tailwindColors = ['gray', 'red', 'yellow', 'green', 'blue'];
const selectColors = () => {
  const shuffledTailwindColors = tailwindColors.sort(() => 0.5 - Math.random());
  return shuffledTailwindColors.slice(0, 2);
};
const Slide = ({ children }) => {
  const [textColor, bgColor] = selectColors();
  return (
    <div
      className={`flex justify-center items-center w-full h-full bg-${bgColor}-300`}
    >
      <h2
        className={`font-mono text-3xl font-semibold leading-normal text-${textColor}-800`}
      >
        {children}
      </h2>
    </div>
  );
};

Slide.propTypes = {
  children: PropTypes.string
};

Slide.defaultProps = {
  children: 'CLICK TO PLAY'
};
export default Slide;
