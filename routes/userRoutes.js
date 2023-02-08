const express = require('express');
const userController = require('./../controllers/userController');
const loginController = require('../controllers/login')

const router = express.Router();

router.post('/login',loginController.login)

router.get('/',(req,res)=>{
    res.send('welcome');
})

module.exports = router;