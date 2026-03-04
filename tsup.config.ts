import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/client.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true,
  sourcemap: false,
  target: 'es2017',
  external: [
    'react',
    'react-dom',
    'next',
    'next/link',
    'next/image',
    'next/font/google',
    '@ant-design/icons',
    'antd',
    'styled-components'
  ],
  splitting: true,
});
