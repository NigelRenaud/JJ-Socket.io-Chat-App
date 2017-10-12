// import express from our dependencies
const express = require('express');
// initialize the app
const app = express();
// importing the socket that allows us to get chat messages instantly
const io = require('socket.io')
// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3000;


// tell the app where to serve
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


// index route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
