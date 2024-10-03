const express = require('express');
const movieController = require('../controllers/movieController');
const authController = require('../controllers/authController')


const router = express.Router();

router.route('/')
.post(movieController.createMovie)
.get(movieController.getAllMovies)

router.route('/:id')
.get(movieController.getMovie)
.patch(movieController.updateMovie)
.delete(movieController.deleteMovie)



module.exports = router;