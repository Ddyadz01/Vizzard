import { useEffect, useState } from 'react';
import { useAudioStore } from '../store/store';

export const usePlayer = (audioRef, activeAudio) => {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

  const { isPlaying, updatePlayingStatus, isAuth } = useAudioStore((state) => state);

  const audio = audioRef?.current;

  const handlePlay = () => {
    if (!audio) return;
    if (isPlaying) {
      updatePlayingStatus(!isPlaying);
      audio.pause();
    } else {
      updatePlayingStatus(!isPlaying);
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
    if (!isAuth) {
      setDuration('00' + ':30');
      setProgress((audio.currentTime / 30) * 100);
      const minutes = Math.floor(audio.currentTime / 60);
      const seconds = Math.floor(audio.currentTime - minutes * 60);
      setCurrentTime('0' + minutes + `${seconds < 10 ? ':0' : ':'}` + seconds);
      if (audio.currentTime >= 30) {
        audio.currentTime = 0;
      }
      return;
    }
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    if (currentTime == duration) {
      setProgress(0);
      updatePlayingStatus(!isPlaying);
    }
    setProgress((currentTime / duration) * 100);
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime - minutes * 60);
    setCurrentTime('0' + minutes + `${seconds < 10 ? ':0' : ':'}` + seconds);
  };

  const updateVolume = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newVolume = offsetX / rect.width;
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const updateProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.offsetWidth;
    const clickRatio = clickPosition / progressBarWidth;
    const newTime = clickRatio * audio.duration;
    audio.currentTime = newTime;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      updatePlayingStatus(true);
    }
  }, [activeAudio]);

  return {
    progress,
    isPlaying,
    handlePlay,
    duration,
    currentTime,
    updateVolume,
    volume,
    updateProgressClick,
  };
};
