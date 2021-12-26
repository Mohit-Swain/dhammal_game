import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      This is About Page
      <button type="button">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default AboutPage;
