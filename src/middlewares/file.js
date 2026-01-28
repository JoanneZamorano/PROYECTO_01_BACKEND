const multer = require("multer");
// Cambia esta línea para importar específicamente 'cloudinary'
const { cloudinary } = require("../config/cloudinary"); 
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary, // Ahora sí recibirá el objeto configurado
    params: {
        folder: "PawAdoptionAPI",
        allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
    },
});

const upload = multer({ storage });
module.exports = { upload };