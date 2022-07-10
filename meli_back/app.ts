import express from 'express';

const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/api/v1/test', (req, res)=> {
    res.send('Hello World');
})

app.options('*', cors())

module.exports = app;