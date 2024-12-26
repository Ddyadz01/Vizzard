import { create } from 'zustand';

export const useAudioStore = create((set) => ({
  activeAudio: {},
  isPlaying: false,
  isAuth: false,
  updateActiveAudio: (audio) => set(() => ({ activeAudio: audio })),
  updatePlayingStatus: (isPlaying) => set(() => ({ isPlaying: isPlaying })),
}));
