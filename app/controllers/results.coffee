express  = require 'express'
router = express.Router()

module.exports = (app) ->
  app.use '/', router

# No repoId present
router.get '/results', (req, res, next) ->
  req.url = '/'


# Route with results
router.get '/results/:repoId', (req, res) ->
  repoId = req.params.repoId # Get the search term from URL param
  res.render 'results', # Render template
    title: 'Results'
    subtitle: 'The scores are in!'
    repoId: repoId

