import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import GamePage from './pages/Game';

function App() {
  return (
    <div className="APP">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="play" element={<GamePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
