import { useRef } from 'react';

import { useAudioStore } from '@store/store';
import { usePlayer } from '@hooks/usePlayer';

import PauseCircleIcon from '/public/icons/pause-circle.svg?react';
import PlayCircleIcon from '/public/icons/play-circle.svg?react';
import ForwardIcon from '/public/icons/forward.svg?react';
import BackwardIcon from '/public/icons/backward.svg?react';

import style from './player.module.scss';

const Player = () => {
  const audioRef = useRef();

  const { activeAudio } = useAudioStore((state) => state);

  const { handlePlay, isPlaying, progress, duration, currentTime } = usePlayer(
    audioRef,
    activeAudio,
  );

  return (
    activeAudio.audioUrl && (
      <div className={style['player']}>
        <audio ref={audioRef} src={activeAudio.audioUrl}></audio>
        <div className={style['progress']}>
          <div className={style['progress--bar']} style={{ width: `${progress + '%'}` }}></div>
        </div>
        <div className={style['player--left']}>
          <img src={activeAudio.imageUrl} alt="" />
          <div className={style['player--left_artist']}>
            <p>{activeAudio.title}</p>
            <span>{activeAudio.artist}</span>
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
          <div
            className={`${style['player--animate']} ${
              isPlaying ? style['active'] : style['player--animate']
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  );
};

export default Player;
