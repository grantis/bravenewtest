
const express = require('express')
const router = express.Router()
const db = require('../db/media')

router.get('/', (req, res) => {
  db.getMedia()
    .then(media => {
      res.json(media)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
