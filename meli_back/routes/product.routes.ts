import { getItemById, getItemsByQuery } from "../controllers/product.controller";

import express from 'express';

const router = express.Router(); 

router.get('/items', getItemsByQuery);

router.get('/items/:id', getItemById);

export default router;