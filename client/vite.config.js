export default defineConfig({
    server: {
      proxy: {
        "/api": 'http://localhost:5000'
      },
    },
    // some other configuration
  })