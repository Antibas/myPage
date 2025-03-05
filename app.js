// const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

var jsonParser = bodyParser.json();
var formParser = bodyParser.urlencoded({ extended: false });

function loadPage(req, res, page="index", redirect=false){
    var lang = "en";
    if("lang" in req.query){
        lang = req.query['lang'];
    }

    if(redirect){
        res.redirect(`${page}?lang=${lang}`)
    } else {
        var file = "public/"+((lang == 'gr')?"greek.json":"english.json");
        fs.readFile(file, (err, data) => {
            if(err) throw err;
            res.render(page, JSON.parse(data));
        });
    }
    // if(lang == 'en'){
    //     fs.readFile('public/english.json', (err, data) => {
    //         if(err) throw err;
    //         res.render(page, JSON.parse(data), (err, html) => {

    //         });
    //     });
    // } else if(lang == 'gr') {
    //     fs.readFile('public/greek.json', (err, data) => {
    //         if(err) throw err;
    //         res.render(page, JSON.parse(data));
    //     });
    // } else {
    // }
}

const app = express();
const PORT = process.env.PORT || 3000
var cookiesAccepted = false;

app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    loadPage(req, res);
});

app.get("/email", (req, res) => {
    loadPage(req, res, "send_email");
});

app.post("/email", formParser, (req, res) => {
    // TODO email send to me
    res.cookie('email', req.params["email"], { maxAge: 3600000, httpOnly: true });
    loadPage(req, res, "/", redirect=true);
});

app.post("/cookies", jsonParser, (req, res) => {
    var accept = req.body.accepted
    if(accept){

    }
    res.cookie('cookiesAccepted', accept, { maxAge: 3600000, httpOnly: true });
    loadPage(req, res, "/", redirect=true);
});

app.get("/cookies", (req, res) => {
    // res.cookie('cookiesAccepted', true, { maxAge: 3600000, httpOnly: true });
    if(!(res.cookies) || !('cookiesAccepted' in res.cookies))
        res.sendStatus(200);
    else
        res.sendStatus(400);
});

app.listen(PORT, () => {
    console.log(`App running to port ${PORT}...`);
})
// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.write("fdsfsf");
//         res.end();
//     }
// });

// server.listen(3000);