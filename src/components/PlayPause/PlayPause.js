import React from 'react';
import './PlayPause.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PlayPause = ({ play }) => {
  return (
    <div type="button" className={classnames('playpause', { paused: play })} />
  );
};

PlayPause.propTypes = {
  play: PropTypes.bool.isRequired
};

export default PlayPause;
