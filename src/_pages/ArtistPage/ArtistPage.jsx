import { useParams } from 'react-router';
import { artists } from '../../data/data.json';
import { useEffect, useState } from 'react';
import { Loader } from './../../_components/shared/Loader/Loader';

const ArtistPage = () => {
  const [artist, setArtist] = useState({});

  const [isLoading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const artist = artists.filter((artist) => artist.id == id);
    setArtist(artist[0]);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [id]);

  if (isLoading) return <Loader />;

  return <h1>{artist.artist_name}</h1>;
};

export default ArtistPage;
