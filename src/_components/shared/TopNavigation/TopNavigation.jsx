import { AudioLines, ChevronRight, Search } from 'lucide-react';
import NotificationIcon from '/public/icons/notification.svg?react';
import ArrowRightIcon from '/public/icons/arrow-circle-right.svg?react';
import ArrowLeftIcon from '/public/icons/arrow-circle-left.svg?react';
import style from './top-navigation.module.scss';
import { useAudioStore } from './../../../store/store';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router';

const TopNavigation = ({ isDashboard, setDashboard, setPlayerShow, isPlayerShow }) => {
  const breadcrumbs = useBreadcrumbs();
  const { activeAudio } = useAudioStore((state) => state);

  return (
    <div className={style['top-navigation']}>
      <div className={style['top-navigation--left']}>
        <div className={style['menu--btn']} onClick={() => setDashboard((prev) => !prev)}>
          {isDashboard ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </div>
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
