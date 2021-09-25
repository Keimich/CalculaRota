const express = require('express');
const router = express();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

router.get('/', (req, res) => {
    res.render('home')
});

router.post('/registerCity', (req, res)=>{

    console.log(req.body)
    res.json({'status': 200})
})

module.exports = router;