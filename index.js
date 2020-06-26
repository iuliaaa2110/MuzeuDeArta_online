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
    // var numeUtiliz= req.session? (req.session.utilizator? req.session.utilizator.username : null) : null;  
    res.render('html/site');
});

app.get("/logout", function(req, res) {
    req.session.destroy();
    res.redirect("/");
});

app.get("/*", function(req,res)
{  
    // var numeUtiliz= req.session? (req.session.utilizator? req.session.utilizator.username : null) : null;    
    res.render('html'+req.url, function(err,textRandare){ 
        if(err){             
            if(err.message.includes("Failed to lookup view"))                
                return res.status(404).render("html/404");            
            else                 
                throw err;         
        }         
    res.send(textRandare);
    });
})



app.post('/Connect', function(req, res) 
{
    var formular = new formidable.IncomingForm();
    // salveaza forumarul intr-o variabila folosindu-se de package
    formular.parse(req, function(err, fields, files){
        fisierUsers=fs.readFileSync("users.json");
        //citeste fisierul users
        var parolaCriptata;
        var algoritmCriptare=crypto.createCipher('aes-128-cbc',"parola_criptare");
        parolaCriptata=algoritmCriptare.update(fields.password, "utf-8", "hex");
        parolaCriptata+=algoritmCriptare.final("hex");
        //criptarea parolei
        obUsers= JSON.parse(fisierUsers);
        //am luat obiectul din json
        var userNou= {
            id: obUsers.last_id,
            username: fields.username,
            email: fields.email,
            parola: parolaCriptata,
            // dataInreg:new Date(),
            // rol: "user"
        }
    //am creat obiect nou de tip user pe care il bagam in vectorul useri
    obUsers.users.push(userNou);
    obUsers.last_id++;
    var jsonNou=JSON.stringify(obUsers);
    fs.writeFileSync("users.json",jsonNou );
    //bag noile date in fisier
    // res.redirect("/Connect")
    //retrimit la index
    })
})


// app.post('/Connect', function(req, res) {
//     var formular = new formidable.IncomingForm()
//     // salveaza forumarul intr-o variabila folosindu-se de package
//     formular.parse(req, function(err, fields, files){
//         var numeUtiliz= req.session? (req.session.utilizator? req.session.utilizator.username : null) : null;  
//         fisierUsers=fs.readFileSync("users.json");
//         var parolaCriptata;
//         //al doilea argument e parola(cheia) de criptare
//         var algoritmCriptare=crypto.createCipher('aes-128-cbc',"parola_criptare");
//         parolaCriptata=algoritmCriptare.update(fields.password, "utf-8", "hex");
//         parolaCriptata+=algoritmCriptare.final("hex");

//         obUsers= JSON.parse(fisierUsers);
//         //am luat obiectul din json
//         var utiliz= obUsers.users.find(function(u) {
//             return u.username == fields.username && parolaCriptata == u.parola;
//             });
//             //find returneaza null daca nu gaseste elementul cu conditia data
//             if(utiliz){
//                 //setez datele de sesiune
//                 req.session.utilizator=utiliz;
//                 res.redirect('/Site');
//             }
//             else{
//                 res.render("html/Connect", {error : "fail login"})
//             }
//     })
// })

app.listen(8080);
console.log('Aplicatia se va deschide pe portul 8080.');