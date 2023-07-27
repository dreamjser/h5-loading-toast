
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import url from 'postcss-url'
export default {
  input: 'example/main.ts',
  output: [{
    file: 'example/index.js',
    format: 'umd',
  }],
  watch: {
    include: ['src/**', 'example/**'],
  },
  plugins:[
    ts({
      clean: true,
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      preferBuiltins: true
    }),
    postcss({
      extract: 'index.css',
      plugins: [
        autoprefixer(),
        url({
          url: "inline",
          maxSize: 10,
          fallback: "copy",
        })
      ]
    }),
    commonjs(),
    json(),
    serve({
      port: 8090,
      openPage: '/example/index.html'
    }),
    livereload()
  ]
}
