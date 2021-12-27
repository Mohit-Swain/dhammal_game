import React, { Component } from 'react';
import classnames from 'classnames';
import Slides from './Slides';
import PlayPause from '../../components/PlayPause/PlayPause';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      counter: -1
    };
    this.togglePlay = this.togglePlay.bind(this);
    this.setPlay = this.setPlay.bind(this);
    this.setCounter = this.setCounter.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  handlePlayPause() {
    const { play } = this.state;
    if (play) {
      this.setState({ play: false, counter: -1 });
    } else {
      this.setState({ play: true, counter: 0 });
    }
  }

  setPlay(play) {
    this.setState({ play });
  }

  setCounter(counter) {
    this.setState({ counter });
  }

  togglePlay() {
    const { play } = this.state;
    this.setState({ play: !play });
  }

  render() {
    const { play, counter } = this.state;
    const arr = ['One', 'Two', 'Three', 'Four'];
    return (
      <div className="flex flex-col w-full h-full border-4">
        <Slides
          slidesArr={arr}
          play={play}
          counter={counter}
          setCounter={this.setCounter}
          handlePlayPause={this.handlePlayPause}
        />
        <button
          className={classnames(
            'flex justify-center items-center h-12 rounded-sm hover:border-2 border-t-2 border-black',
            {
              'bg-green-400': !play,
              ' bg-red-400': play
            }
          )}
          onClick={this.handlePlayPause}
          type="button"
        >
          <div className=" transform scale-50">
            <PlayPause play={play} />
          </div>
          <div className="font-mono text-xl font-medium text-center">
            {play ? 'Pause' : 'Play'}
          </div>
        </button>
      </div>
    );
  }
}

export default Slideshow;
