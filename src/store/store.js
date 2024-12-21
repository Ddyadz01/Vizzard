import { create } from 'zustand';

export const useAudioStore = create((set) => ({
  activeAudio: {},
  updateActiveAudio: (audio) => set(() => ({ activeAudio: audio })),
}));
