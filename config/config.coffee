path     = require 'path'
rootPath = path.normalize __dirname + '/..'
env      = process.env.NODE_ENV || 'development'

config =
  development:
    root: rootPath
    app:
      name: 'productivity-measurer'
    port: 3000
    db: 'mongodb://localhost/productivity-measurer'

  test:
    root: rootPath
    app:
      name: 'productivity-measurer'
    port: 3000
    db: 'mongodb://localhost/productivity-measurer'

  production:
    root: rootPath
    app:
      name: 'productivity-measurer'
    port: 3000
    db: 'mongodb://localhost/productivity-measurer'

module.exports = config[env]
