import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base: 'LoTienes',
  build: {
    outDir: 'docs', // or any other directory you prefer
  },
});
