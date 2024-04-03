
import { resolve } from 'path'
export default {
  root: resolve(__dirname, 'src'),
  // base: './',
  base: "https://jedwincrower.github.io/proyect-inf-133/",
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        contacto: resolve(__dirname, 'src/contacto.html'),
        dashboard: resolve(__dirname, 'src/dashboard.html'),
        login: resolve(__dirname, 'src/login.html'),
        nosotros: resolve(__dirname, 'src/nosotros.html'),
        noticias: resolve(__dirname, 'src/noticias.html'),
      },
    },
    publicPath: "https://jedwincrower.github.io/proyect-inf-133/",
  },
}