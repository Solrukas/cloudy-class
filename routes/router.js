const express = require('express');
const router = express.Router();
const path = require('path');

// bootstrap and jquery
const vendors = require('./vendors');
router.use('/vendors', vendors);

router.get('/', (req, res) => {
    const filePath = path.join('public', 'index.html')
    res.sendFile(filePath);
});

router.get('/login', (req, res) => {
    res.redirect('/login.html');
});

router.get('/register', (req, res) => {
    res.redirect('/register.html');
});

router.post('/login', (req, res) => {
    console.log(req.body);
});

router.post('/register', (req, res) => {
    console.log(req.body);
});

module.exports = router;