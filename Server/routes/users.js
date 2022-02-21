var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with  a resource');
});

router.get('/Dimple' ,function(req,res,next)
{ res.send('respond with a resource');
});

module.exports = router;
