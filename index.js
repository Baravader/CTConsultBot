require('dotenv').config();
require('dotenv').config();
const Telegraf = require('telegraf');
const http = require('http');
const PORT = process.env.PORT || 3000;

http
    .createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('ok');
        res.end();
    })
    .listen(process.env.PORT || 3000);
console.log(`listener port is ${PORT}`);

const bot = new Telegraf(process.env.TOKEN);