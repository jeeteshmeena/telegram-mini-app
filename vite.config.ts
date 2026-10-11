import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), basicSsl()],
    build: {
        // GitHub Pages is publishing the /docs folder from the main branch.
        outDir: './docs',
    },
    // This repository is hosted at /telegram-mini-app/ on GitHub Pages.
    base: '/telegram-mini-app/',
    server: {
        port: 5174,
    },
});
