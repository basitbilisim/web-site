const express = require('express')
const exphbs = require('express-handlebars');
const port = 3000 || process.env.PORT
const app = express()

app.use(express.static('public'))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const main = require('./routes/main.js')
app.use('/', main)

app.listen(port, () => {
    console.log('server is running http://localhost:' + port)
})