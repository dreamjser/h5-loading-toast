
import resolve from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import url from 'postcss-url'

const override = {
  compilerOptions: {
    "declaration": true,
    "declarationDir": "es",
    "noEmit": true,
  }
}
export default {
  input: 'src/index.ts',
  output: [{
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
    ts({
      tsconfigOverride: override
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      preferBuiltins: true
    }),
    json()
  ]
}
