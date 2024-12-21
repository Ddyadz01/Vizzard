/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
const config = defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {},
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, './src/_components'),
      '@pages': resolve(__dirname, './src/_pages'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@store': resolve(__dirname, './src/store'),
    },
  },
});

export default config;
