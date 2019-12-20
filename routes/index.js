var express = require('express');
var router = express.Router();

let indexService=require('../service/indexService');

router.get('/', function (req, res, next) {
  res.send("hellow word");
});

router.post('/login', function (req, res, next) {
    console.log(req.query);
    res.json(req.query);
});

router.get('/sys/menu/nav', function (req, res, next) {
  console.log(req.query);
  indexService.getMenu(req.query,function (data) {
    let result={
      menuList:data,
      authorities:[]
    };
    res.json(result);
  });
});

router.get('/sys/user/info', function (req, res, next) {
  console.log(req.query);
  indexService.getInfo(req.query,function (data) {
    res.json(data);
  });
});


router.get('/captcha.jpg', function (req, res, next) {
  console.log(req.query);
  res.json(req.query);
});






router.post('/proxyApi/login', function (req, res, next) {
    console.log(req.body);
    res.json(req.body);
});

router.get('/proxyApi/captcha.jpg', function (req, res, next) {
    console.log(req.query);
    res.json(req.query);
});

router.get('/proxyApi/sys/menu/nav', function (req, res, next) {
  console.log(req.query);
  res.json(req.query);
});

module.exports = router;
