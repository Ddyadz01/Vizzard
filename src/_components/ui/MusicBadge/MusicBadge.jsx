import { usePlayer } from '@hooks/usePlayer';

import style from './music-badge.module.scss';

const MusicBadge = (audioRef) => {
  const { isPlaying } = usePlayer(audioRef);

  return (
    <div
      className={`${style['player--animate']} ${
        isPlaying ? style['active'] : style['player--animate']
      }`}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MusicBadge;
