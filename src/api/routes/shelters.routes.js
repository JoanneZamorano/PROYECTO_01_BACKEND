const express = require("express");
const {
    postShelter,
    getShelter,
    putShelter,
    deleteShelter,
  // getAllShelters 
} = require("../controllers/shelters.controllers");

const router = express.Router();

// RUTAS CRUD BÁSICAS
router.get("/:id", getShelter);          // GET /api/shelters/:id
router.post("/", postShelter);           // POST /api/shelters
router.put("/:id", putShelter);          // PUT /api/shelters/:id
router.delete("/:id", deleteShelter);    // DELETE /api/shelters/:id

// RUTAS ADICIONALES
// router.get("/", getAllShelters);      // GET /api/shelters

module.exports = router;