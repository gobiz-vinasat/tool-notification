require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const webhookController = require('./controllers/webhookController');

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.get('/', (req, res) => res.send('OK'));
app.post('/sentry', webhookController.sentry);

app.listen(port, () => console.log(`The app listening on port ${port}!`));