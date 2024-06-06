import express from 'express';
import { getMovies, getMovieById } from '../controllers/moviecontroller.js';

const router = express.Router();

router.get('/movies', getMovies);
router.get('/movies/:id', getMovieById);

export default router;
