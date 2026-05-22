import express from "express";
import { read, show } from '../controllers/postControllers.js';

const router = express.Router();


router.get('/', read);
router.get('/:id', show);


export default router;

