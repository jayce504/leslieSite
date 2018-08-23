const express = require('express')
const app = express()

app.get('/', (req, res) => res.render('landing'))
app.get('/about', (req, res) => res.render('about'))
app.get('/staff', (req, res) => res.render('staff'))
app.get('/criminal_law', (req, res) => res.render('criminal_law'))
app.get('/family_law', (req, res) => res.render('family_law'))
app.get('/estate_law', (req, res) => res.render('estate_law'))
app.get('/process', (req, res) => res.render('process'))
app.get('/contact', (req, res) => res.render('contact'))

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || 3000)

module.exports = app;
