const express = require('express')
const router = express.Router()
const Movie = require('../models/movies')


router.get('/', (req, res) => {

    Movie.find({}, (err, foundMovies) => {
        res.render('movies/index.ejs', {
            movie: foundMovies

         })
    })
})

router.get('/new', (req, res) => {
    res.render('movies/new.ejs')
})

module.exports = router