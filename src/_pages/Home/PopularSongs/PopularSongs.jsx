import SongItem from '@components/shared/SongItem/SongItem';

import data from './data.json';

import style from './popular.module.scss';

const PopularSongs = () => {
  return (
    <div className={style['popular--songs']}>
      <h1>Popular Songs</h1>
      {data.map((song) => (
        <SongItem key={song.id} item={song} />
      ))}
    </div>
  );
};

export default PopularSongs;
