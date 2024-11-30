// const http = require('http');
// const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/index.html'));
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