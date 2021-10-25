import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteMockServe({ mockPath: './mock' })],
  base: './', //打包路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), //设置别名
    },
  },
  server: {
    port: 8080, //启动端口
    // open: true,
    // proxy: {
    //   // 选项写法
    //   '/api': 'http://localhost:4000', //代理网址
    // },
    // cors: true,
  },
});
