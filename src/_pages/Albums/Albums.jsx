import AlbumItem from '../../_components/shared/AlbumItem/AlbumItem';
import { useAlbums } from '../../hooks/useAlbums';

import style from './albums.module.scss';

const Albums = () => {
  const { albumsList } = useAlbums();
  return (
    <div className={style['albums--page']}>
      {albumsList.map((album) => (
        <div className={style['album--item']} key={album.id}>
          <AlbumItem item={album} />
          <p className={style['album--item_artist']}>{album.artist_name}</p>
        </div>
      ))}
    </div>
  );
};

export default Albums;
