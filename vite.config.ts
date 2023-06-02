import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        game: "./game.html",
        "edit-game": "./edit-game.html",
        "create-game": "./create-game.html",
      },
    },
  },
});
