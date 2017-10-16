const express = require('express');
const views = require('../controllers/viewController');

const pageRouter = express.Router();

pageRouter.get('/', (req, res) =>{
  res.render('chatroom')
})

  module.exports = pageRouter;
