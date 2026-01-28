const express = require("express");
const { postShelter, getShelter, putShelter, deleteShelter, getAllShelters } = require("../controllers/shelters.controllers");
const { isAuth, isAdmin } = require("../../middlewares/auth.middleware");
const { upload } = require('../../middlewares/file')

const router = express.Router();

// GET de todas las protectoras ahora disponible
router.get("/", [isAuth], getAllShelters); // GET /api/shelters --  Admin
router.get("/:id", [isAuth], getShelter); // GET /api/shelters/:id --  Admin

router.post("/", [isAuth, isAdmin], upload.single('image'), postShelter); // POST /api/shelters --  Admin y trabajador
router.put("/:id", [isAuth, isAdmin], putShelter); // PUT /api/shelters/:id --  Admin y trabajador
router.delete("/:id", [isAuth, isAdmin], deleteShelter); // DELETE /api/shelters/:id --  Admin y trabajador

module.exports = router;



/*
----- Codigo anterior a las utorizaciones de usuarios

const express = require("express");
const { postShelter, getShelter, putShelter, deleteShelter,getAllShelters } = require("../controllers/shelters.controllers");

const router = express.Router();

// RUTAS CRUD BÁSICAS
router.get("/:id", getShelter);          // GET /api/shelters/:id
router.post("/", postShelter);           // POST /api/shelters
router.put("/:id", putShelter);          // PUT /api/shelters/:id
router.delete("/:id", deleteShelter);    // DELETE /api/shelters/:id

// RUTAS ADICIONALES
router.get("/", getAllShelters);      // GET /api/shelters

module.exports = router;*/