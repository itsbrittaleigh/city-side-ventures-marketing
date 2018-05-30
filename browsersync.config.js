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
