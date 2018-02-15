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


// const socketApi = require('./socket.api');

let nicknames=[];
// Chat actions below
// io.on('connection', socketApi);
io.on('connection', (socket) => {
  // When a user joins the chat log it.
  console.log('a user connected');


        socket.on('new user',function(name,callback)
        {
            // if the newly entered username already exists in array return false,othersise push it into the array
           if(nicknames.indexOf(name)!=-1) {
               callback(false);
           }else {
               callback(true);
               socket.nickname=name;
               nicknames.push(socket.nickname);
               io.sockets.emit('usernames',nicknames);
               // updateNicknames();
               console.log('new user name: ' + socket.nickname);
           }
        });

          function updateNicknames(){
            io.sockets.emit('usernames', nicknames);
            console.log('updateNicknames ran: ' + nicknames);
        }
// Sends message to chat
        socket.on('chat message', function(message){
            io.emit('chat message', {nick: socket.nickname, msg: message});
            console.log(message);
  });

// log when a user disconnects
        socket.on('disconnect', function(message){
            if(!socket.nickname) return;
            nicknames.splice(nicknames.indexOf(socket.nickname), 1);
            updateNicknames();
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
