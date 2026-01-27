require("dotenv").config();
const mongoose = require("mongoose");
const pets = require("../../data/pets");
const Pet = require("../../api/models/pet.model");

mongoose.connect(process.env.DB_URL)
    .then(async () => {
        console.log("Conectado con éxito para ejecutar el Seed");
        
        // Buscamos si hay animales previas
        const allPets = await Pet.find();
        
        // Si existen, borramos la colección para no duplicar datos
        if (allPets.length > 0) {
        await Pet.collection.drop();
        console.log("Colección borrada para limpieza");
        }
    })
    .catch((err) => console.log(`Error al borrar la colección: ${err}`))
    .then(async () => {
        // Insertamos el array de animales que importamos de data/pets.js
        await Pet.insertMany(pets);
        console.log("Nuevos animales añadidos con éxito");
    })
    .catch((err) => console.log(`Error al insertar los animales: ${err}`))
    .finally(() => {
        // Es vital desconectarse al terminar para que el proceso finalice en la terminal
        mongoose.disconnect();
        console.log("Desconectado de MongoDB");
    });