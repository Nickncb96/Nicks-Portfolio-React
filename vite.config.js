import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Importing the path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
});