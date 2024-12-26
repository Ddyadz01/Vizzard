import { useParams } from 'react-router';

import SongItem from '@components/shared/SongItem/SongItem';

import { useGetAlbum } from '@hooks/useGetAlbum';

import style from './album-page.module.scss';

const AlbumPage = () => {
  const { id } = useParams();

  const { activeAlbum, albumSong } = useGetAlbum(id);

  if (!activeAlbum) return <div>Альбом временно не доуступен.</div>;
  if (!albumSong.length) return <div>Здесь пока пусто :)</div>;
  return (
    <div className={style['album--page']}>
      <h1 style={{ textTransform: 'capitalize' }}>{activeAlbum.album_name}</h1>
      {albumSong.map((song) => (
        <SongItem item={song} key={song.id} />
      ))}
    </div>
  );
};

export default AlbumPage;
