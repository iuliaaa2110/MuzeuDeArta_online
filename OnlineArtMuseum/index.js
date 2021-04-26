var express = require('express');/*include modulul express
memorand in variabila express obiectul asociat modulului(exportat de modul)*/
var path = require('path');
var formidable = require('formidable');
var crypto = require('crypto');
var session = require("express-session");
var fs = require('fs');
var bodyParser = require('body-parser');
const { response } = require('express');
var app = express();

// pentru folosirea ejs-ului 
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "resources")))

app.use(session({
    secret: "cheie_sesiune",
    resave: true,
    saveUninitialized: false
}))

// cand se face o cerere get catre pagina de index 
app.get('/', function(req, res) {
    /*afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) */
    var numeUtiliz= req.session? (req.session.utilizator? req.session.utilizator.username : null) : null;  
    res.render('html/index', {username:numeUtiliz});
});

app.get("/logout", function(req, res) {
    req.session.destroy();
    res.redirect("/");
});

app.get("/*", function(req,res)
{  
    var numeUtiliz= req.session? (req.session.utilizator? req.session.utilizator.username : null) : null;    
    res.render('html'+req.url, {username:numeUtiliz}, function(err,textRandare){ 
        if(err){             
            if(err.message.includes("Failed to lookup view"))                
                return res.status(404).render("html/404", {username:numeUtiliz});            
            else                 
                throw err;         
        }         
    res.send(textRandare);
    });
})

app.listen(8080);
console.log('Aplicatia se va deschide pe portul 8080.');