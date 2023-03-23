const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:true}));

const userData = require('./routes/userRoutes');
app.use(userData);

app.listen(3000);