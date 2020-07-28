const express = require('express')
const router = express.Router()
const Movie = require('../models/movies')


router.get('/', (req, res) => {

    Movie.find({}, (err, foundMovies) => {
        console.log(foundMovies)
        res.render('movies/index.ejs', {
            movie: foundMovies

         })
    })
})

router.get('/new', (req, res) => {
    res.render('movies/new.ejs')
})

router.get('/:id', (req, res) => {
    Movie.findById(req.params.id, (err, foundMovies)=> {
        res.render('movies/show.ejs', {
            movie: foundMovies
        })
    })
})

router.get('/:id/edit', (req, res) => {
    Movie.findById(req.params.id, (err, foundMovies) => {
        res.render('movies/edit.ejs', {
            movie: foundMovies
        })
    })
})


router.post('/', (req, res)=> {
    Movie.create(req.body, (err, createdMovie) => {
        
        res.redirect('/movies')
    })
})

router.put('/:id', (req, res) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/movies')
    })
})

router.delete('/:id', (req, res) => {
    Movie.findByIdAndRemove(req.params.id, () => {
        res.redirect('/movies')
    })
})

module.exports = router