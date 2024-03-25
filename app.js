// TODO: Express

const express = require('express')
const hbs = require('hbs');
require('dotenv').config()
const app = express()
const port = process.env.PORT



// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contneido estatico

app.use( express.static('public') );

app.get('/',  (req, res) =>{
  res.render('home', {
    nombre: 'Edgar Ocampo',
    titulo: 'Practica Node'
  });
});

// generic
app.get('/generic',  (req, res) =>{
  // res.sendFile(__dirname + '/public/generic.html')
  res.render('generic', {
    nombre: 'Edgar Ocampo',
    titulo: 'Practica Node'
  });
})
// elements
app.get('/elements',  (req, res) =>{
  // res.sendFile(__dirname + '/public/elements.html')
  res.render('elements', {
    nombre: 'Edgar Ocampo',
    titulo: 'Practica Node'
  });
})
// Manejo de error en ruta
app.get('*',  (req, res) =>{
  res.sendFile(__dirname + '/public/old/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

