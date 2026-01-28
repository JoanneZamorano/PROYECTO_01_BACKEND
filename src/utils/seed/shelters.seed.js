require("dotenv").config();
const mongoose = require("mongoose");
const shelters = require("../../data/shelters");
const Shelter = require("../../api/models/shelter.model");

mongoose.connect(process.env.DB_URL)
    .then(async () => {
        const allShelters = await Shelter.find();
        if (allShelters.length) {
        await Shelter.collection.drop();
        console.log("Colección de protectoras eliminada correctamente");
        }
    })
    .catch((err) => console.log("Error al borrar las protectoras", err))
    .then(async () => {
        await Shelter.insertMany(shelters);
        console.log("Semilla de protectoras insertada con éxito");
    })
    .catch((err) => console.log("Error al insertar las protectoras", err))
    .finally(() => mongoose.disconnect());