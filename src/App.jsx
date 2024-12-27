import { Route, Routes } from 'react-router';

import Home from '@pages/Home/Home';
import Artists from '@pages/Artists/Artists';

import Dashboard from '@components/shared/Dashboard/Dashboard';
import TopNavigation from '@components/shared/TopNavigation/TopNavigation';

import Player from '@components/shared/Player/Player';

import './App.scss';
import { useState } from 'react';
import ArtistPage from './_pages/ArtistPage/ArtistPage';
import Albums from './_pages/Albums/Albums';
import AlbumPage from './_pages/AlbumPage/AlbumPage';
import RegisterPage from './_pages/Auth/RegisterPage';

function App() {
  const [isPlayerShow, setPlayerShow] = useState(true);

  return (
    <div className="app">
      <Dashboard />
      <div className="app-element content">
        <TopNavigation setPlayerShow={setPlayerShow} isPlayerShow={isPlayerShow} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:id" element={<ArtistPage />} />
          <Route exact path="/albums" element={<Albums />} />
          <Route exact path="/albums/:id" element={<AlbumPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<h1>Login</h1>} />
        </Routes>
        <Player isPlayerShow={isPlayerShow} />
      </div>
    </div>
  );
}

export default App;
