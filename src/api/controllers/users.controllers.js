const bcrypt = require("bcrypt"); 

const User = require("../models/user.model");
const { generateSign } = require("../../utils/jwt");

const registerUser = async (req, res) => {
    try {
        const user = new User(req.body);
        // Verificar si el email ya está registrado
        const userExist = await User.findOne({ email: user.email });
        if (userExist) {
        return res.status(400).json({ error: "El usuario ya existe" });
        }
        // Guardar nuevo usuario
        const userDB = await user.save();
        res.status(201).json(userDB);
    } catch (error) {
    return res.status(400).json({ 
        error: "Error registrando al usuario",
        mensajeReal: error.message 
        });
    }
};

// Login de usuario
const loginUser = async (req, res) => {
    try {
        //busca al usuario por su email
        const user = await User.findOne({ email: req.body.email }); 
        if (!user) {
            return res.status(400).json("Contraseña o usuario incorrectos"); 
        }
        //compara la contraseña introducida con la guardada en bbdd
        const validPassword = bcrypt.compareSync(req.body.password, user.password); 
        if (!validPassword) {
            return res.status(400).json("Contraseña o usuario incorrectos");
        }
        // genera un token JWT si la contraseña es válida
        const token = generateSign(user._id, user.email);
        return res.status(200).json(token); //devuelve el token en la respuesta
    } catch (error) {
    return res.status(400).json({ 
        error: "Error registrando al usuario",
        mensajeReal: error.message 
        });
    }
};

module.exports = { registerUser, loginUser };