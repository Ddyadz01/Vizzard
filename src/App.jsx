import { Route, Routes } from 'react-router';

import Home from '@pages/Home/Home';
import Artists from '@pages/Artists/Artists';

import Dashboard from '@components/shared/Dashboard/Dashboard';
import TopNavigation from '@components/shared/TopNavigation/TopNavigation';

import Player from '@components/shared/Player/Player';

import './App.scss';
import { useState } from 'react';
import ArtistPage from './_pages/ArtistPage/ArtistPage';

function App() {
  const [isDashboard, setDashboard] = useState(false);
  const [isPlayerShow, setPlayerShow] = useState(true);
  return (
    <div className="app">
      <Dashboard isDashboard={isDashboard} setDashboard={setDashboard} />
      <div className="app-element content">
        <TopNavigation
          setDashboard={setDashboard}
          isDashboard={isDashboard}
          setPlayerShow={setPlayerShow}
          isPlayerShow={isPlayerShow}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
        </Routes>
        <Player isPlayerShow={isPlayerShow} />
      </div>
    </div>
  );
}

export default App;
