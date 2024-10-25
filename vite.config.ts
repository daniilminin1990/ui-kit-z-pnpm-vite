// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import packageJson from './package.json'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'), // Точка входа приложения
      name: 'ui-kit-snapmoment', // название библы
      // the proper extensions will be added
      fileName: 'index', // название выходного файла,
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react-jsx-runtime' , ...Object.keys(packageJson.dependencies), ...Object.keys(packageJson.devDependencies) ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        // globals: {
        //   vue: 'Vue',
        // },
      },
    },
    target: 'esnext', // Указываем бандлеру на какую версию es ориентироваться
    sourcemap: true
  },
})
