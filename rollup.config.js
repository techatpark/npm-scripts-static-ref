import multiInput from 'rollup-plugin-multi-input';
 
export default {
    // use glob in the input
    input: ['src/**/*.js'],
    output: {
      format: 'esm',
      dir: 'dist'
    },
    plugins: [ multiInput() ],
};