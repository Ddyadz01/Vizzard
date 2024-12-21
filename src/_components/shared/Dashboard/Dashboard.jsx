import { Link, useLocation } from 'react-router';

import logo from '/images/logo.png';
import HomeIcon from '/public/icons/home.svg?react';
import DiscoverIcon from '/public/icons/discover.svg?react';
import RadioIcon from '/public/icons/radio.svg?react';
import AlbumsIcon from '/public/icons/albums.svg?react';
import PodcastIcon from '/public/icons/microphone.svg?react';

import style from './dashboard.module.scss';

const Dashboard = ({ isDashboard }) => {
  const { pathname } = useLocation();
  return (
    <div className={`${style['dashboard']} ${isDashboard ? style['active'] : style['dashboard']}`}>
      <div className={style['dashboard--logo']}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={style['dashboard--nav']}>
        <nav>
          <ul>
            <li>
              <Link to="/" className={pathname === '/' ? style['active'] : ''}>
                <HomeIcon />
                Home
              </Link>
            </li>
            <li>
              <Link to="/discover" className={pathname === '/discover' ? style['active'] : ''}>
                <DiscoverIcon />
                Discover
              </Link>
            </li>
            <li>
              <Link>
                <RadioIcon />
                Radio
              </Link>
            </li>
            <li>
              <Link>
                <AlbumsIcon />
                Albums
              </Link>
            </li>
            <li>
              <Link>
                <PodcastIcon />
                Podcast
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
