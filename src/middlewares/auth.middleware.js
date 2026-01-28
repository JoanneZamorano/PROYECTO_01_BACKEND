const { verifySign } = require("../utils/jwt");
const User = require("../api/models/user.model");

// 1. Portero General: ¿Tiene un pase (token) válido?
const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json("No autorizado");
        const decoded = verifySign(token);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) { return res.status(401).json("Token inválido"); }
};

// 2. ¿Es el Jefe (Joa)?
const isAdmin = (req, res, next) => {
    if (req.user?.role === "admin") return next();
    return res.status(403).json("Acceso denegado: Se requiere ser Admin");
};

// 3. ¿Es un empleado de la protectora?
const isTrabajador = (req, res, next) => {
    if (req.user?.role === "trabajador" || req.user?.role === "admin") return next();
    return res.status(403).json("Solo trabajadores pueden realizar esta acción");
};

module.exports = { isAuth, isAdmin, isTrabajador };