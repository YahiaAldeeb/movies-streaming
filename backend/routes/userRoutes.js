const express = require('express');
const userController = require('../controllers/userController');
const authController=require('../controllers/authController')


const router = express.Router();

router.route('/')
.post(userController.createUser)
.get(userController.getAllUsers)

router.route('/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser)

router.route('/signup').post(authController.signup)
router.route('/signin').post(authController.signin)



module.exports = router;