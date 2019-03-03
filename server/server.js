'use strict';
const path = require('path');
const express = require('express');
const server = express();
const publicPath = path.join(__dirname, '..', 'public');


server.use(express.static(publicPath));

server.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

server.listen(3000, ()=> {
    console.log('Server started');
})
