import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { replaceCodePlugin } from "vite-plugin-replace";
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

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
    ],
    css: {
      preprocessorOptions: {
        sass: {}
      }
    }
  }
})
