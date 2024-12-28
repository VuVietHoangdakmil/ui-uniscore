import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import ViteImagemin from "vite-plugin-imagemin";
import { compression } from "vite-plugin-compression2";
// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
         
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true, // Loại bỏ các lệnh console.log trong quá trình nén
      },
    },
  },
  plugins: [react(), ViteImagemin({
    gifsicle: {
      optimizationLevel: 7, // Mức tối ưu hóa cho ảnh GIF, giá trị từ 1 đến 3
      interlaced: false, // Chế độ ảnh GIF có thể hiển thị mờ khi tải, false là không
    },
    optipng: {
      optimizationLevel: 7, // Mức tối ưu hóa cho PNG, giá trị từ 0 đến 7
    },
    mozjpeg: {
      quality: 20, // Mức độ nén ảnh JPEG (từ 0 đến 100, giá trị thấp sẽ nén mạnh và giảm chất lượng)
    },
    pngquant: {
      quality: [0.5, 0.7], // Mức độ nén cho ảnh PNG (chất lượng từ 0.5 đến 0.7)
      speed: 4, // Tốc độ nén (1 là nhanh nhất, 10 là chậm nhất nhưng chất lượng cao hơn)
    },
    svgo: {
      plugins: [
        { removeViewBox: false }, // Giữ lại viewBox trong các ảnh SVG
        { removeEmptyAttrs: true }, // Xóa các thuộc tính rỗng trong ảnh SVG
      ],
    },
  }),

  compression(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

})
