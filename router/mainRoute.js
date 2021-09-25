const express = require('express');
const router = express();

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

router.get('/', (req, res) => {
    res.render('home')
});

module.exports = router;