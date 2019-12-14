var express = require('express');
var router = express.Router();
let userService=require('../service/userService');

//http://localhost:3000/user/get?userId=121
router.get('/get', function(req, res, next) {
  userService.get(req.query,function (data) {
    res.json(data);
  });
});

//http://localhost:3000/user/get?userId=121
router.get('/getResful', function(req, res, next) {
  userService.get(req.query,function (data) {
    res.json(data);
  });
});

//http://localhost:3000/user/list?limit
router.get('/list', function(req, res, next) {
  let param=req.query;
  if(!param.limit){
    param.limit=10;
  }else{
    param.limit=parseInt( param.limit);
  }
  userService.list(req.query,function (data) {
    res.json(data);
  });
});

router.post('/update', function(req, res, next) {
  userService.update(req.body,function (data) {
    console.log(data);
    res.send(JSON.stringify(data));
  });
});


router.post('/insert', function(req, res, next) {
  userService.insert(req.body,function (data) {
    console.log(data);
    res.send(JSON.stringify(data));
  });
});

router.post('/save', function(req, res, next) {
  userService.save(req.body,function (data) {
    console.log(data);
    res.send(JSON.stringify(data));
  });
});


router.post('/delete', function(req, res, next) {
  userService.delete(req.body,function (data) {
    console.log(data);
    res.send(JSON.stringify(data));
  });
});

module.exports = router;
