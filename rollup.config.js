
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import url from 'postcss-url'

export default {
  input: 'src/index.ts',
  output: [{
    name: 'loadingToast',
    file: 'lib/index.js',
    format: 'umd',

  }, {
    file: 'es/index.js',
    format: 'es',
  }],
  plugins: [
    postcss({
      plugins: [
        autoprefixer(),
        url({
          url: "inline",
          maxSize: 10,
          fallback: "copy",
        })
      ]
    }),
    ts(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      preferBuiltins: true
    }),
    commonjs(),
    json()
  ]
}
