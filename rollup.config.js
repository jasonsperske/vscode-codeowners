import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: './src/extension.mjs',
    output: {
        file: './dist/extension.cjs',
        format: 'cjs',
        sourcemap: true
    },
    external: ['vscode'],
    plugins: [nodeResolve(), commonjs()]
};
