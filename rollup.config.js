import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'most.js',
  dest: 'dist/most.js',
  format: 'umd',
  moduleName: 'most',
  sourceMap: true,
  plugins: [
    buble(),
    nodeResolve({
      jsnext: false, // symbol-observable throws errors when used with this 'true'
    }),
    commonjs({
      // Can not resolve '*' type exports without guidance
      namedExports: {
        '@most/prelude': [
          // array.js
          'cons',
          'append',
          'drop',
          'tail',
          'copy',
          'map',
          'reduce',
          'replace',
          'remove',
          'removeAll',
          'findIndex',
          'isArrayLike',
          // function.js
          'id',
          'compose',
          'apply',
          'curry2',
          'curry3'
        ]
      }
    })
  ]
}