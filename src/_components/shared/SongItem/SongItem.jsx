import { useAudioStore } from '@store/store';

import { Link } from 'react-router';

import HeadphoneIcon from '/public/icons/headphone.svg?react';
import HeartIcon from '/public/icons/heart-circle.svg?react';
import MoreIcon from '/public/icons/more.svg?react';
import TimeIcon from '/public/icons/time.svg?react';

import style from './song-item.module.scss';

const SongItem = ({ item }) => {
  const updateActiveAudio = useAudioStore((state) => state.updateActiveAudio);
  const { id } = useAudioStore((state) => state.activeAudio);
  return (
    <div
      onClick={() => updateActiveAudio(item)}
      className={`${style['song--item']} ${item.id === id ? style['active'] : ''}`}
    >
      <div className={style['song--item__left']}>
        <div className={style['song--index']}>
          {id === item.id && <span className={style['song--badge']}></span>}
          {item.id}
        </div>
        <div className={style['song--image']}>
          <img src={item.imageUrl} alt="" />
        </div>
        <div className={style['song--info']}>
          <p>{item.title}</p>
          <Link to={`/artists/${item.artist_id}`}>
            <span>{item.artist}</span>
          </Link>
        </div>
      </div>
      <div className={style['song--item__center']}>
        <HeadphoneIcon />
        {item.countAditions}
      </div>
      <div className={style['song--item__time']}>
        <TimeIcon />
        {item.duration}
      </div>
      <div className={style['song--item__right']}>
        <HeartIcon />
        <MoreIcon />
      </div>
    </div>
  );
};

export default SongItem;
