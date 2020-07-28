const express = require('express');
const mongoose = require('mongoose')
const app = express();
const movieControllers = require('./controllers/movies.js')
const methodOverride = require('method-override')


const connectionString = 'mongodb://localhost/blog'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', () => console.log(`Mongoose connected to ${connectionString}`))
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'))
mongoose.connection.on('error', (err) => console.log('Mongoose error', err))

app.use(express.urlencoded({extended: false }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.use('/movies', movieControllers)

app.listen(3000, ()=>{
	console.log('listening....');
});