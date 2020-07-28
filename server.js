const express = require('express');
const app = express();
const movieControllers = require('./controllers/movies.js')

app.use('/movies', movieControllers)

app.listen(3000, ()=>{
	console.log('listening....');
});