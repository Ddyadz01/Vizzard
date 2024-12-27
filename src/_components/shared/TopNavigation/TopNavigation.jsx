import { Link } from 'react-router';

import { useAudioStore } from '@store/store';

import { AudioLines, ChevronRight, Search } from 'lucide-react';

import NotificationIcon from '/public/icons/notification.svg?react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import style from './top-navigation.module.scss';

const TopNavigation = ({ setPlayerShow, isPlayerShow }) => {
  const breadcrumbs = useBreadcrumbs();
  const { activeAudio } = useAudioStore((state) => state);

  return (
    <div className={style['top-navigation']}>
      <div className={style['top-navigation--left']}>
        {activeAudio?.audioUrl ? (
          <div className={style['player--toggle']} onClick={() => setPlayerShow((prev) => !prev)}>
            {isPlayerShow ? <AudioLines stroke="var(--green-color)" /> : <AudioLines />}
          </div>
        ) : (
          ''
        )}
        <div className={style['breadcrumbs']}>
          {breadcrumbs.map((item, idx) => (
            <Link
              to={item.match.pathname}
              key={item.match.pathname}
              className={`${style['breadcrumbs--link']} ${
                item.location.pathname === item.match.pathname
                  ? style['active']
                  : style['breadcrumbs--link']
              }`}
            >
              {item.breadcrumb.props.children}
              {idx != breadcrumbs.length - 1 ? <ChevronRight /> : ''}
            </Link>
          ))}
        </div>
      </div>
      <div className={style['top-navigation--right']}>
        <div className={style['search']}>
          <Search />
          <input type="text" placeholder="Search" />
        </div>
        <div className={style['notifications']}>
          <NotificationIcon />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
