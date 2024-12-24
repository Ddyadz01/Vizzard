import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Loader } from '@components/shared/Loader/Loader';

import { useAudioStore } from '@store/store';

import { artists, popular } from '../../data/data.json';

import style from './artist-page.module.scss';
import SongItem from '../../_components/shared/SongItem/SongItem';
import TitleComponent from '../../_components/ui/TitleComponent/TitleComponent';

const ArtistPage = () => {
  const [artist, setArtist] = useState({});
  const [artistAudio, setArtistAudio] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const { activeAudio } = useAudioStore((state) => state);

  const { id } = useParams();

  useEffect(() => {
    setArtist(artists.filter((artist) => artist.id == id)[0]);
    setArtistAudio(popular.filter((audio) => audio.artist_id == id));
    setLoading(false);
  }, [id]);

  if (isLoading) return <Loader />;

  return (
    <div className={style['artist--page']}>
      <div className={style['artist--info']}>
        <h1>
          {artist.artist_name}
          {activeAudio.artist_id == id && (
            <p style={{ color: 'var(--green-color' }}>Сейчас проигрывается</p>
          )}
        </h1>
        <img src={artist.artist_image_url} alt="" />
      </div>

      <div className={style['artist--songs']}>
        <TitleComponent size={'l'} content={'Artist songs'} />
        {artistAudio.map((audio) => (
          <SongItem item={audio} key={audio.id} />
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
