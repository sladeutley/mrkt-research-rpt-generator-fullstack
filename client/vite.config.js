import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

//Below is for if using @react-pdf/renderer, but that includes more configurations to vite.config.js and installing to package.json using npm install @react-pdf/renderer, but it wasn't working properly so would have to figure out and make sure also doesn't effect rest of code

// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';

// export default defineConfig({
//   plugins: [
//     reactRefresh(),
//   ],
//   build: {
//     rollupOptions: {
//       input: 'index.html',
//       output: {
//         format: 'es',
//       },
//     },
//   },
//   optimizeDeps: {
//     include: ['@react-pdf/renderer', 'jspdf', 'file-saver'],
//   },
//   esbuild: {
//     loader: 'jsx', // enable JSX syntax extension
//     target: 'es2015', // set target to ES2015 to support modern JS features
//   },
// });