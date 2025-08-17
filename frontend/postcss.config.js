import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

export default {
  plugins: [tailwindcss("./node_modules/tailwindcss/lib/index.js"), autoprefixer],
}
