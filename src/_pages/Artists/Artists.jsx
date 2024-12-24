import { Link } from 'react-router';

import TitleComponent from '@components/ui/TitleComponent/TitleComponent';
import MusicBadge from '@components/ui/MusicBadge/MusicBadge';

import { useAudioStore } from '@store/store';

import PlayCircleIcon from '/public/icons/play-circle.svg?react';

import { artists } from '../../data/data.json';

import style from './artists.module.scss';
const Artists = () => {
  const { activeAudio } = useAudioStore((state) => state);

  return (
    <div className={style['artists--page']}>
      <TitleComponent content={'Artists'} size={'l'} />
      <div className={style['artists--content']}>
        {artists.map((artist) => (
          <div key={artist.id} className={style['artist--item']}>
            <div className={style['artist-image']}>
              <img
                src={artist.artist_image_url}
                alt=""
                style={
                  activeAudio.artist_id === artist.id
                    ? { filter: 'brightness(0.45) blur(2px)' }
                    : {}
                }
              />
              <div className={style['music--vizualaizer']}>
                {activeAudio.artist_id === artist.id && <MusicBadge />}
              </div>
              <Link to={`/artists/${artist.id}`}>
                <div className={style['artist-image_btn']}>
                  <PlayCircleIcon />
                  <div className={style['button_text']}>
                    <TitleComponent size={'s'} content={'Перейти'} />
                  </div>
                </div>
              </Link>
            </div>
            <div className={style['artist-info']}>
              <TitleComponent size={'l'} content={artist.artist_name} />
              {/* <p>{artist.artist_label}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
