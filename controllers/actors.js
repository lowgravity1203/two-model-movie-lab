const express = require('express')
const router = express.Router()
const Actor = require('../models/actors')

router.get('/', (req, res) => {

    Actor.find({}, (err, foundActors) => {
        console.log(foundActors)
        res.render('actors/index.ejs', {
            actor: foundActors
         })
    })
})

router.get('/new', (req, res) => {
    res.render('actors/new.ejs')
})

router.get('/:id', (req, res) => {
    Actor.findById(req.params.id, (err, foundActors)=> {
        res.render('actors/show.ejs', {
            actor: foundActors
        })
    })
})

router.get('/:id/edit', (req, res) => {
    Actor.findById(req.params.id, (err, foundActors) => {
        res.render('actors/edit.ejs', {
            actor: foundActors
        })
    })
})


router.post('/', (req, res)=> {
    Actor.create(req.body, (err, createdActor) => {
        
        res.redirect('/actors')
    })
})

router.put('/:id', (req, res) => {
    Actor.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/actors')
    })
})

router.delete('/:id', (req, res) => {
    Actor.findByIdAndRemove(req.params.id, () => {
        res.redirect('/actors')
    })
})


module.exports = router