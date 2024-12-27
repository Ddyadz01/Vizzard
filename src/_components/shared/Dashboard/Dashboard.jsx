import { Link, useLocation } from 'react-router';

import HomeIcon from '/public/icons/home.svg?react';
import AlbumsIcon from '/public/icons/albums.svg?react';
import PodcastIcon from '/public/icons/microphone.svg?react';
import MusicLogo from '/public/icons/music-dashboard.svg?react';
import PeopleIcon from '/public/icons/people.svg?react';

import style from './dashboard.module.scss';
import TitleComponent from './../../ui/TitleComponent/TitleComponent';
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import { useState } from 'react';

const Dashboard = () => {
  const [isDashboard, setDashboard] = useState(false);
  const { pathname } = useLocation();
  return (
    <div className={`${style['dashboard']} ${isDashboard ? style['active'] : style['dashboard']}`}>
      <div className={style['dashboard--header']}>
        <div className={style['dashboard--logo']}>
          <TitleComponent content={'RetroSound'} size={'l'} />
          <MusicLogo />
        </div>
        <div className={style['menu--btn']} onClick={() => setDashboard((prev) => !prev)}>
          {isDashboard ? <ArrowLeftFromLine /> : <ArrowRightFromLine />}
        </div>
      </div>

      <div className={style['dashboard--nav']}>
        <nav>
          <ul>
            <li>
              <Link to="/" className={pathname === '/' ? style['active'] : ''}>
                <HomeIcon />
                <p> Home</p>
              </Link>
            </li>
            <li>
              <Link to="/artists" className={pathname === '/artists' ? style['active'] : ''}>
                <PeopleIcon />
                <p> Artists</p>
              </Link>
            </li>
            <li>
              <Link to="/albums" className={pathname === '/albums' ? style['active'] : ''}>
                <AlbumsIcon />
                <p> Albums</p>
              </Link>
            </li>
            <li>
              <Link to="/register" className={pathname === '/register' ? style['active'] : ''}>
                <PodcastIcon />
                <p>Register</p>
              </Link>
            </li>
            <li>
              <Link to="/login" className={pathname === '/login' ? style['active'] : ''}>
                <PodcastIcon />
                <p>Login</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dashboard;
