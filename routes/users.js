const express = require('express');
const router = express.Router();

//Login Page
router.get('/login',(req, res) => res.send('Login'));

//register Page
router.get('/register',(req, res) => res.send('register'));

//Dashboard Page
router.get('/dashboard',(req, res) => res.send('dashboard'));

//Register Handle
router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('hello');
})


module.exports = router;