import { useEffect, useState } from 'react';
import { artists } from '../data/data.json';
export const useAlbums = () => {
  const [albumsList, setAlbumsList] = useState([]);

  const addAlbum = (newAlbum, artist) => {
    setAlbumsList((prevList) => {
      if (!prevList.some((album) => album.id === newAlbum.id)) {
        return [...prevList, { ...newAlbum, artist_name: artist.artist_name }];
      }
      return prevList;
    });
  };

  useEffect(() => {
    if (artists.length > 0) {
      artists.forEach((artist) => {
        artist.artist_albums.forEach((album) => addAlbum(album, artist));
      });
    }
  }, []);
  return {
    albumsList,
  };
};
