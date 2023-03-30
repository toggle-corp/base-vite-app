import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(() => ({
    plugins: [
        // https://github.com/aleclarson/vite-tsconfig-paths
        tsconfigPaths(),
        // https://github.com/gxmari007/vite-plugin-eslint
        eslint({ cache: true }),
        // https://github.com/pd4d10/vite-plugin-svgr
        svgr(),
        // https://github.com/antfu/vite-plugin-pwa
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: [
                'favicon.ico',
                'favicon.png',
                'apple-touch-icon.png',
            ],
            manifest: {
                name: 'Vite App',
                short_name: 'Vite App',
                description: 'A Vite App',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
        react(),
    ],
    // https://github.com/vitest-dev/vitest
    test: {
        include: ['src/**/*.test.ts'],
        environment: 'jsdom',
        coverage: {
            reporter: ['text', 'json', 'html'],
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom', 'react-router-dom'],
                },
            },
        },
    },
}));
