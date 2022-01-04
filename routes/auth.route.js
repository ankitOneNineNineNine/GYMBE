const router = require('express').Router();

router.post('/login', function (req, res, next) {
    console.log(req.body)
})

router.post('/register', function (req, res, next) {
    console.log(req.body)
})