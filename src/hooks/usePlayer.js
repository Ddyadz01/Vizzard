import { useEffect, useState } from 'react';

export const usePlayer = (audioRef, activeAudio) => {
  const [isPlaying, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audio = audioRef?.current;

  const handlePlay = () => {
    if (!audio) return;
    if (isPlaying) {
      setPlaying((prev) => !prev);
      audio.pause();
    } else {
      setPlaying((prev) => !prev);
      audio.play();
    }
  };

  useEffect(() => {
    if (!audio?.duration) return;
    const seconds = ('' + (audio?.duration / 60).toFixed(2)).split('.')[1] * 0.6;
    const minutes = ('' + (audio?.duration / 60).toFixed(2)).split('.')[0];
    setDuration('0' + minutes + ':' + Math.floor(seconds));
  }, [activeAudio, audio?.duration]);

  useEffect(() => {
    if (!audio) return;
    audio.addEventListener('timeupdate', updateProgress);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, [audio]);

  const updateProgress = () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    if (currentTime == duration) {
      setProgress(0);
      setPlaying((prev) => !prev);
    }
    setProgress((currentTime / duration) * 100);
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime - minutes * 60);
    setCurrentTime('0' + minutes + `${seconds < 10 ? ':0' : ':'}` + seconds);
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
    duration,
    currentTime,
  };
};
