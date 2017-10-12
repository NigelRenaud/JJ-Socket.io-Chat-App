// import express from our dependencies
const app = require('express')();
// initialize the use of http????
const http = require('http').Server(app);
// importing the socket that allows us to get chat messages instantly
const io = require('socket.io')(http);
// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3000;

// Chat actions below
io.on('connection', (socket) => {
  // When a user joins the chat log it.
  console.log('a user connected');

  // When a user sends message, send it to the whole room
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  // Console log the message that was sent
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });

  // log when a user disconnects
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
// tell the app where to listen to
http.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


// index route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
