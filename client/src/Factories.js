const uuidv4 = require ('uuid/v4');
// Creates a user. id, name, param
const createUser = () ({name=""} = {})=> (
    {
      id:uuidv4(),
      name
    }
  )
// Create a new message obj. id, time, msg string, sender. param
const createMessage = ({message="", sender=""} = {}) =>(
{
  id:uudv4(),
  time: getTime(new Date(Date.now())),
  message,
  sender
})
//creates a chat object
const createChat = ({messages= [], name="Community", users= []} = {}) => (
{
  id:uudv4(),
  name,
  messages,
  users,
  typingusers: []
}
)

// get the time in readable format
const getTime = (date) => {
  return `${date.getHours()}:${"0"+date.getMinutes()).slice(-2)}`
}

module.exports = { createMessage, createChat, createUser}
