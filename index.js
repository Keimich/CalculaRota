const express = require('express');
const router = require('./router/mainRoute');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use('/', express.static(__dirname + '/public'));
app.use('/', router);

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server running in ' + port);
    }
});