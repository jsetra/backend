const express = require("express");
const router = express.Router();
const{validateRegister, validateLogin}= require('../validators/auth');
const { loginCtrl, registerCtrl } = require("../controllers/auth");


/**Crea un registro de usuario */

//TODO http://locallhost:5000/api/auth/login
//TODO http://localhost:5000/api/auth/registrer
router.post("/register",validateRegister,registerCtrl );
router.post("/login",validateLogin, loginCtrl);


module.exports = router;
