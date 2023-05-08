const express = require('express');
const bodyParser = require('body-parser');
require('./src/db/mongoose')
require('dotenv').config();

var cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors({origin: '*'}))

const port = process.env.PORT;

const paymentRouter = require('./src/routers/payment')
const storyRouter = require('./src/routers/story')

app.use(paymentRouter);
app.use(storyRouter);


app.get('/', (req, res) => {
    res.send({ msg: 'Hello, we are connected' });
})

app.listen(port, () => {
    console.log('Your server is running on port 8000');
});