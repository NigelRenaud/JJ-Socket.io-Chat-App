// import express from our dependencies
const express = require('express');
const app = require('express')();
// initialize the use of http????
const http = require('http').Server(app);
// importing the socket that allows us to get chat messages instantly
const io = require('socket.io')(http);
// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3000;

const path = require('path');

// const app = require('express')();
// const io = module.exports.io = require('socket.io')(app)


const socketApi = require('./socket.api');


// Chat actions below
// io.on('connection', socketApi);
io.on('connection', (socket) => {
  // When a user joins the chat log it.
  console.log('a user connected');

  // When a user sends message, send it to the whole room
  // Console log the message that was sent
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });

  socket.on('send-nickname', function(nickname) {
    socket.nickname = nickname;
    users.push(socket.nickname);
    console.log(users);
})


  // log when a user disconnects
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


// tell the app where to listen to
http.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Instead of page found, send down the react app to handle any pages.
// app.get('*', (req, res) => {
//   // Send index.html file which is the entire react app.
//   res.sendFile(`${__dirname}/client/public/index.html`);
// });

// Set app to use ejs views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));


// index route
app.get('/', (req, res) => {
    res.render('index', {
      title: "Jenkins & Jonez"
    })
});

// When the /app page is called it uses the router to find the correct view.
const appRoutes = require('./routes/app_routes');
app.use('/app', appRoutes);

//  Handle any errors
app.get('*', (req, res) => {
  res.status(404).send('not found!');
});
