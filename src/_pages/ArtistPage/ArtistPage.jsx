import { useParams } from 'react-router';

import { Loader } from '@components/shared/Loader/Loader';

import style from './artist-page.module.scss';
import SongItem from '@components/shared/SongItem/SongItem';
import { useArtist } from '@hooks/useArtist';
import { useState } from 'react';
import Button from '../../_components/ui/Button/Button';
import AlbumItem from '../../_components/shared/AlbumItem/AlbumItem';
import TitleComponent from '../../_components/ui/TitleComponent/TitleComponent';

const ArtistPage = () => {
  const [toggleTabs, setToggleTabs] = useState('songs');
  const { id } = useParams();
  const { activeAudio, artist, artistAudio, isLoading } = useArtist(id);

  if (isLoading) return <Loader />;

  return (
    <div className={style['artist--page']}>
      <div className={style['artist--info']}>
        {activeAudio.artist_id == id && (
          <p style={{ color: 'var(--green-color' }} className={style['indicator']}>
            Сейчас проигрывается
          </p>
        )}
        <div className={style['artist--image']}>
          <div className={style['artist--image_img']}>
            <h1>{artist.artist_name}</h1>
            <img src={artist.artist_image_url} alt={artist.artist_name} />
          </div>
        </div>
        <div className={style['artist--info__content']}>
          <div className={style['list-item']}>
            <TitleComponent content={'Исполнитель'} size={'s'} />
            <p>{artist.artist_name}</p>
          </div>
          <div className={style['list-item']}>
            <TitleComponent content={'Имя'} size={'s'} />
            <p>{artist.artist_firstname}</p>
          </div>
          <div className={style['list-item']}>
            <TitleComponent content={'Фамилия'} size={'s'} />
            <p>{artist.artist_lastname}</p>
          </div>
          <div className={style['list-item']}>
            <TitleComponent content={'Страна рождения'} size={'s'} />
            <p>{artist.artist_country}</p>
          </div>
        </div>
      </div>
      <div className={style['artist--content']}>
        <div className={style['tabs']}>
          <Button
            text={'Песни'}
            isActive={toggleTabs == 'songs' && true}
            onClickFn={() => setToggleTabs('songs')}
            size={'l'}
            type={'default'}
          />
          <Button
            text={'Альбомы'}
            onClickFn={() => setToggleTabs('albums')}
            isActive={toggleTabs == 'albums' && true}
            size={'l'}
            type={'default'}
          />
        </div>
        {toggleTabs == 'songs' ? (
          <div className={style['artist--songs']}>
            {/* <TitleComponent size={'l'} content={'Artist songs'} /> */}
            {artistAudio.map((audio) => (
              <SongItem item={audio} key={audio.id} />
            ))}
          </div>
        ) : (
          <div className={style['artist--albums']}>
            {artist.artist_albums.map((album) => (
              <div key={album.id} className={style['artist--albums_item']}>
                <AlbumItem item={album} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistPage;
