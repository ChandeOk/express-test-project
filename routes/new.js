var express = require('express');
var router = express.Router();
const messages = require('../messages');

router.get('/', function (req, res, next) {
  res.render('new', { title: 'New Post' });
});
router.post('/', function (req, res, next) {
  messages.push({
    text: req.body.post,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect('/');
});
module.exports = router;
