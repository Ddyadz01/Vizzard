import { useRef } from 'react';

import { useAudioStore } from '@store/store';
import { usePlayer } from '@hooks/usePlayer';

import PauseCircleIcon from '/public/icons/pause-circle.svg?react';
import PlayCircleIcon from '/public/icons/play-circle.svg?react';
import ForwardIcon from '/public/icons/forward.svg?react';
import BackwardIcon from '/public/icons/backward.svg?react';

import style from './player.module.scss';
import MusicBadge from '../../ui/MusicBadge/MusicBadge';
import { Link } from 'react-router';

const Player = ({ isPlayerShow }) => {
  const audioRef = useRef();

  const { activeAudio } = useAudioStore((state) => state);

  const { handlePlay, isPlaying, progress, duration, currentTime } = usePlayer(
    audioRef,
    activeAudio,
  );

  return (
    activeAudio.audioUrl && (
      <div className={`${style['player']} ${isPlayerShow ? style['player'] : style['hidden']}`}>
        <audio ref={audioRef} src={activeAudio.audioUrl}></audio>
        <div className={style['progress']}>
          <div className={style['progress--bar']} style={{ width: `${progress + '%'}` }}></div>
        </div>
        <div className={style['player--left']}>
          <img src={activeAudio.imageUrl} alt="" />
          <div className={style['player--left_artist']}>
            <p>{activeAudio.title}</p>
            <Link to={`/artists/${activeAudio.artist_id}`}>
              <span>{activeAudio.artist}</span>
            </Link>
          </div>
        </div>
        <div className={style['player--center']}>
          <BackwardIcon onClick={() => (audioRef.current.currentTime -= 5)} />
          {isPlaying ? (
            <PauseCircleIcon className={style['playing-btn']} onClick={() => handlePlay()} />
          ) : (
            <PlayCircleIcon className={style['playing-btn']} onClick={() => handlePlay()} />
          )}
          <ForwardIcon onClick={() => (audioRef.current.currentTime += 5)} />
        </div>
        <div className={style['player--right']}>
          <div className={style['player--time']}>{duration + ' / ' + currentTime}</div>
        </div>
        <MusicBadge audioRef={audioRef} />
      </div>
    )
  );
};

export default Player;
