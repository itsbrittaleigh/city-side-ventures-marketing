// 🎌 BROWSER-SYNC FOR AUTO RELOAD JAZZ-PLUS A BETTER IMPLEMENTATION OF EXTENSIONLESS URLS 🎌
module.exports = {
  "server": "dist",
  "port": "8080",
  "files": "dist",
  "open": true,
  "notify": true,
  "serveStatic": [
    'build'
  ],
  "serveStaticOptions": {
    "extensions": ['html']
  }
}
