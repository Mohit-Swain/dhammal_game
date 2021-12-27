import React from 'react';

import { Link } from 'react-router-dom';
import UnderlineButton from '../../components/UI/Buttons/UnderLineButton';
import HomeBgImg from '../../assets/images/homebg.jpg';
import DhammalLogo from '../../assets/images/dhammal_logo.png';
import repeatMainBg from '../../assets/images/repeatBg.jpg';

const Home = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen bg-contain"
      style={{
        backgroundImage: `url(${repeatMainBg})`
      }}
    >
      <div
        className="container flex flex-col justify-center items-center px-4 md:px-0 h-1/2 md:h-3/4 bg-repeat-x bg-contain"
        style={{
          backgroundImage: `url(${HomeBgImg})`
        }}
      >
        <div className="flex items-center h-1/2">
          <img src={DhammalLogo} alt="Game Logo" className="h-16 md:h-20" />
        </div>
        <div className="h-1/2">
          <Link to="/play">
            <UnderlineButton underlineColor="green">Play</UnderlineButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
