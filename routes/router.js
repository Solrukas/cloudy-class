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

router.get('/api', (req, res) => {
    res.redirect('/api.html');
});

router.get('/storage', (req, res) => {
    res.redirect('/storage.html');
});

router.get('/containers', (req, res) => {
    res.redirect('/containers.html');
});

module.exports = router;