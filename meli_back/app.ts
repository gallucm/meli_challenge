import express from 'express';

import cors from 'cors';
const app = express();
require('dotenv').config();

import productRouter from './routes/product.routes';

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/api', productRouter);

app.options('*', cors())

export default app;