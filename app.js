const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const http = require('http');

// http.createServer(function (req,res) {
//     const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
//     res.end(html)
// }).listen(3000,() => {
//     console.log('listen 3000')
// })

app.use(express.static(path.resolve(__dirname, './public')))

app.get('*', function (req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './public/index.html'), 'utf-8')
    res.send(html)
})
app.listen(3003,() => {
    console.log('server at 3003')
});

