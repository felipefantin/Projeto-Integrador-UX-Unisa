import path from 'path';
import { defineConfig } from 'vite'; 
export default defineConfig(() => {
    return {
      base: '/Projeto-Integrador-UX-Unisa/', 
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});