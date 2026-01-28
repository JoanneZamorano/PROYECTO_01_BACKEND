const express = require("express");
const { registerUser, loginUser } = require("../controllers/users.controllers");

const router = express.Router();

router.post("/register", registerUser); // Para crear la cuenta
router.post("/login", loginUser);          // Para obtener el token JWT

module.exports = router;