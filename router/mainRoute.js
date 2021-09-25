const express = require('express');
const router = express();
const bodyParser = require('body-parser');
const saveData = require('../prisma/dbController');

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

router.post('/registerCity', (req, res) => {

    const data = {
        name: req.body.cityName,
        lat: req.body.cityLat,
        lng: req.body.cityLng
    }
    saveData(data)
    res.json({
        'status': 200
    })
})

module.exports = router;