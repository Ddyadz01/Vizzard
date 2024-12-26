import { useEffect, useState } from 'react';

import { artists, popular } from '../data/data.json';

export const useGetAlbum = (id) => {
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [albumSong, setAlbumSong] = useState([]);

  useEffect(() => {
    artists.map((artist) => {
      artist.artist_albums.forEach((album) => {
        if (album.id === parseInt(id)) {
          setActiveAlbum(album);
        }
      });
    });
    return () => {
      setActiveAlbum(null);
    };
  }, [id]);

  useEffect(() => {
    popular
      .filter((song) => song.album_id === parseInt(id))
      .forEach((song) => {
        setAlbumSong((prevSongs) => {
          if (!prevSongs.some((s) => s.id === song.id)) {
            return [...prevSongs, song];
          }
          return prevSongs;
        });
      });
  }, [activeAlbum, id]);
  return { activeAlbum, albumSong };
};
