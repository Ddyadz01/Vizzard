import { useEffect, useState } from 'react';
import { artists, popular } from '../data/data.json';
import { useAudioStore } from '../store/store';

export const useArtist = (id) => {
  const [artist, setArtist] = useState({});
  const [artistAudio, setArtistAudio] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const { activeAudio } = useAudioStore((state) => state);

  useEffect(() => {
    setArtist(artists.filter((artist) => artist.id == id)[0]);
    setArtistAudio(popular.filter((audio) => audio.artist_id == id));
    setLoading(false);
  }, [id]);
  return {
    artist,
    artistAudio,
    isLoading,
    activeAudio,
  };
};
