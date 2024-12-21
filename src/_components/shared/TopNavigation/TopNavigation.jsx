import { CircleChevronLeft, CircleChevronRight, Search } from 'lucide-react';
import NotificationIcon from '/public/icons/notification.svg?react';
import style from './top-navigation.module.scss';

const TopNavigation = ({ isDashboard, setDashboard }) => {
  return (
    <div className={style['top-navigation']}>
      <div className={style['top-navigation--left']}>
        <div className={style['menu--btn']} onClick={() => setDashboard((prev) => !prev)}>
          {/* <MenuIcon /> */}
          {isDashboard ? <CircleChevronLeft /> : <CircleChevronRight />}
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
