import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Loader } from '@components/shared/Loader/Loader';

import { useAudioStore } from '@store/store';

import { artists } from '../../data/data.json';

import style from './artist-page.module.scss';

const ArtistPage = () => {
  const [artist, setArtist] = useState({});

  const [isLoading, setLoading] = useState(true);

  const { activeAudio } = useAudioStore((state) => state);

  const { id } = useParams();

  useEffect(() => {
    const artist = artists.filter((artist) => artist.id == id);
    setArtist(artist[0]);

    setLoading(false);
  }, [id]);

  if (isLoading) return <Loader />;

  return (
    <div className={style['artist--page']}>
      <h1>
        {artist.artist_name}
        {activeAudio.artist_id == id && (
          <p style={{ color: 'var(--green-color' }}>Сейчас проигрывается</p>
        )}
      </h1>
    </div>
  );
};

export default ArtistPage;
