const express = require('express');
const app     = express();
const router  = require('./routes/router')
const date    = new Date();
const day     = date.getDay();
const hours   = date.getHours();

app.set('view engine', 'ejs');

const middleware = (req, res, next) => (day >= 1 && day <= 5 && hours >= 9 && hours <= 17) ? next()
:                   res.send("sorry i'm closed, come back later!");

app.use(middleware);

app.get("/", (req,res) => res.render("index"));
app.use('/', router)
app.get("/public/style.css", (req,res) => res.sendFile(__dirname+'/public/style.css'));


app.listen(3000);
