// const io = require('./server.js').io

// //import events
// const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require('../client/src/Events');

// const {createUser, createMessage, createChat } = require('../client/src/Factories');

// let connectedUser = {};

// module.exports = function(socket){
// console.log("Socket Id:" + socket.id);

// socket.on('chat message', function(msg){
//     console.log('message: ' + msg);

//      socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });

// socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });

// // Verify Username
// socket.on(VERIFY_USER, (newUser, callback) =>{
//     if(!isUser(connectedUsers, newUser)){
//       callback({isUser:false, user:createUser({name:newUser})})

//     }else{
//       callback({isUser:true})
//     }
//   })

// // User connects with a username
// socket.on(USER_CONNECTED, (user) => {
//   connectedUsers = addUser(connectedUsers, user)
//   socket.user = user;
//   io.emit(USER_CONNECTED, connectedusers)
//   console.log(connectedUsers);
// })

// // User disconnets

// // User logout
// })
// }

// // Adds user to existing list
// addUser(userList, user) =>{
//   let newList = Object.assign({}, userList)
//   newList[user.name] = user
//   return newList
// }

// // Removes user from the existing list
// removeUser(userList, username) =>{
//   let newList = Object.assign({}, userList)
//   delete newList[username]
//   return newList
// }

// // Checks if user is apart of the existing list.
// isUser(userList, username) =>{
//   return username in userList
// }

