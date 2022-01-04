const router = require('express').Router();
const db = require('../database/firebase.db')
router.post('/login', function (req, res, next) {
    console.log(req.body)
})

router.post('/register', function (req, res, next) {
    console.log(req.body)
})

module.exports = router;