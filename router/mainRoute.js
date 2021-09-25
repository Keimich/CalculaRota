const express = require('express');
const router = express();
const bodyParser = require('body-parser');
const queries = require('../prisma/dbController');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

router.get('/', async (req, res) => {

    const dbData = await queries.getData()
    res.render('home', {
        dbData: dbData
    })
});

router.post('/registerCity', (req, res) => {

    if (req) {
        const data = {
            name: req.body.cityName,
            lat: req.body.cityLat,
            lng: req.body.cityLng
        }
        queries.saveData(data)

        res.json({
            'status': 200
        })
    }
})

router.post('/removeAllCities', (req, res) => {
    
    if (req.body.status == 200) {
        queries.removeAllCities().then(res.json({'status': 204}))
    }
})

module.exports = router;