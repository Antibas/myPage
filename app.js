// const http = require('http');
// const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    // console.log(`${req.method} / ${res.statusCode} ${res.statusMessage}`);
    // res.sendFile(path.join(__dirname, 'public', '/index.html'));
    res.render("index");
});

app.get("/send_email", (req, res) => {
    // console.log(`${req.method} /send_email ${res.statusCode} ${res.statusMessage}`);
    // res.sendFile(path.join(__dirname, 'public', '/send_email.html'));
    res.render("send_email");
});

app.post("/send_email", (req, res) => {
    // TODO email send to me
    // console.log(`${req.method} /send_email ${res.statusCode} ${res.statusMessage}`);
    // res.sendFile(path.join(__dirname, 'public', '/index.html'));
    res.render("index");
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