import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import watch from "rollup-plugin-watch"

const pkg = require('./package.json')

export default [
  {
    input: './src/lib.js',
    output: {
      name: 'frontend-components',
      file: pkg.main,
      format: 'umd',
      globals: {
        vue: 'Vue'
      }
    },
    external: ['vue'],
    plugins: [
    //   scss(),
      scss({fileName: pkg.name + '.css'}),
      vue(),
      commonjs(),
      resolve(),
      watch({ dir: "src" })
    ]
  },
]