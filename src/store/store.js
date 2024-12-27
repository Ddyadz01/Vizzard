import { create } from 'zustand';

export const useAudioStore = create((set) => ({
  activeAudio: {},
  isPlaying: false,
  isAuth: true,
  updateActiveAudio: (audio) => set(() => ({ activeAudio: audio })),
  updatePlayingStatus: (isPlaying) => set(() => ({ isPlaying: isPlaying })),
}));
