import { AudioLines, CircleChevronLeft, CircleChevronRight, Search } from 'lucide-react';
import NotificationIcon from '/public/icons/notification.svg?react';
import ChartIcon from '/public/icons/chart.svg?react';
import style from './top-navigation.module.scss';

const TopNavigation = ({ isDashboard, setDashboard, setPlayerShow, isPlayerShow }) => {
  return (
    <div className={style['top-navigation']}>
      <div className={style['top-navigation--left']}>
        <div className={style['menu--btn']} onClick={() => setDashboard((prev) => !prev)}>
          {isDashboard ? <CircleChevronLeft /> : <CircleChevronRight />}
        </div>
        <div className={style['player--toggle']} onClick={() => setPlayerShow((prev) => !prev)}>
          {isPlayerShow ? <AudioLines stroke="var(--green-color)" /> : <AudioLines />}
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
