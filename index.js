const express = require('express')
const app = express()

app.get('/', (req, res) => res.render('landing'))

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => console.log('Site launched on port 3000!'))

module.exports = app;
