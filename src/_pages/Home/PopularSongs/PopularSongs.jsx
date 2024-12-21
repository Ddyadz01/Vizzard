import SongItem from '@components/shared/SongItem/SongItem';

import data from './data.json';

import style from './popular.module.scss';
import TitleComponent from '../../../_components/ui/TitleComponent/TitleComponent';

const PopularSongs = () => {
  return (
    <div className={style['popular--songs']}>
      <TitleComponent content={'Popular Songs'} size={'l'} />
      {data.map((song) => (
        <SongItem key={song.id} item={song} />
      ))}
    </div>
  );
};

export default PopularSongs;
