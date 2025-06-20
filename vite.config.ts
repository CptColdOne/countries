import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		strictPort: true,
		https: false,
		cors: false,
		open: false,
	},
	resolve: {
		alias: {
			'@': '/src',
			'~': '/node_modules',
		},
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
	},
	build: {
		outDir: 'dist',
		sourcemap: true,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom'],
				},
			},
		},
		chunkSizeWarningLimit: 1000,
	},
});
