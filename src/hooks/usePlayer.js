import { useEffect, useState } from 'react';

export const usePlayer = (audioRef, activeAudio) => {
  const [isPlaying, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlay = () => {
    if (!audioRef?.current) return;
    if (isPlaying) {
      setPlaying((prev) => !prev);
      audioRef.current.pause();
    } else {
      setPlaying((prev) => !prev);
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.addEventListener('timeupdate', updateProgress);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, [audioRef.current]);

  const updateProgress = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    if (currentTime == duration) {
      setProgress(0);
      setPlaying((prev) => !prev);
    }
    setProgress((currentTime / duration) * 100);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlaying(true);
    }
  }, [activeAudio]);

  return {
    progress,
    isPlaying,
    handlePlay,
  };
};
