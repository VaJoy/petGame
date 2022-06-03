import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { replaceCodePlugin } from "vite-plugin-replace";
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const renameIndexPlugin = (newFilename) => {
  if (!newFilename) return

  return {
    name: 'renameIndex',
    enforce: 'post',
    generateBundle(options, bundle) {
      for(var b in bundle) {
        if(b.lastIndexOf('index.html') > -1) {
          bundle[b].fileName = newFilename
        }
      }
    },
  }
}

export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: [{
        find: '@',
        replacement: dirname
      }, {
        find: '@src',
        replacement: path.resolve(dirname, 'src')
      },
      {
        find: '@assets',
        replacement: path.resolve(dirname, 'src/assets')
      },
      {
        find: '@components',
        replacement: path.resolve(dirname, 'src/components')
      },
      {
        find: '@mock',
        replacement: path.resolve(dirname, 'src/mock')
      },
      {
        find: '@js',
        replacement: path.resolve(dirname, 'src/js')
      },
      ]
    },
    build: {
      outDir: dirname,
      rollupOptions: {
        root: path.resolve(dirname, 'src'),
        input: {
          // http://localhost:3001/src/index.html
          main: path.resolve(dirname, 'src', 'index.html'),
        },
      }
    },
    plugins: [
      replaceCodePlugin({
        replacements: [
          {
            from: "__IS_DEV__",
            to: String(mode === 'development'),
          },
        ],
      }),
      vue(),
      splitVendorChunkPlugin(),
      renameIndexPlugin('index.html'),
    ],
    css: {
      preprocessorOptions: {
        sass: {}
      }
    }
  }
})
