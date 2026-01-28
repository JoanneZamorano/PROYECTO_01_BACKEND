
// src/api/routes/pets.routes.js
const express = require("express");
const { getPets, createPet, updatePet, deletePet } = require("../controllers/pets.controllers");
const { isAuth, isAdmin, isTrabajador } = require("../../middlewares/auth.middleware");
const { upload } = require('../../middlewares/file')

const router = express.Router();

// Rutas protegidas por rol
router.get("/", [isAuth], getPets); // GET /api/pets --  AUTORIZADO (loging)
router.post("/", [isAuth, isTrabajador], upload.single('image'), createPet); // POST /api/pets --  Trabajador y Admin
router.put("/:id", [isAuth, isTrabajador], updatePet); // PUT /api/pets/:id --  Trabajador y Admin
router.delete("/:id", [isAuth, isAdmin], deletePet); // DELETE /api/pets/:id --  Admin

module.exports = router;



/*
----- Codigo anterior a las utorizaciones de usuarios

const express = require("express");
const { getPets, getPetById, createPet, updatePet, deletePet, searchPetsByName, getPetsByAnimal, getRandomPet, bulkCreatePets } = require("../controllers/pets.controllers");

const router = express.Router();

// RUTAS CRUD BÁSICAS
router.get("/", getPets);          // GET /api/pets
router.get("/:id", getPetById);    // GET /api/pets/:id
router.post("/", createPet);       // POST /api/pets
router.put("/:id", updatePet);     // PUT /api/pets/:id
router.delete("/:id", deletePet);  // DELETE /api/pets/:id

// RUTAS ADICIONALES
router.get("/search", searchPetsByName);    // GET /api/pets/search?title=texto
router.get("/genre/:genre", getPetsByAnimal); // GET /api/pets/genre/:genre
router.get("/random", getRandomPet);         // GET /api/pets/random
router.post("/bulk", bulkCreatePets);        // POST /api/pets/bulk

module.exports = router;
*/