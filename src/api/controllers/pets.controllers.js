const Pet = require("../models/pet.model");

/**
 * GET /api/pets -> Esto son los endpoints que aplicaremos posteriormente
 * - Obtiene todas los animales
 * - Si todo va bien, responde 200 con el array de animales.
 */
const getPets = async (req, res) => {
    try {
        const pets = await Pet.find();
        res.status(200).json(pets);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener los animales" });
    }
};

/**
 * GET /api/pets/:id
 * - Busca un animal por su ID.
 * - Si no existe, devuelve 404.
 * - Si el formato del ID es inválido, devuelve 400.
 */
const getPetById = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        if (!pet) {
            return res.status(404).json({ error: "Animal no encontrado" });
        }
        res.status(200).json(pet);
    } catch (err) {
        res.status(400).json({ error: "ID inválido o error en la búsqueda" });
    }
};

/**
 * POST /api/pets
 * - Crea una nuevo animal.
 * - Aplica las validaciones del Schema automáticamente.
 * - Si la creación es correcta, devuelve 201 con el documento creado.
 */
const createPet = async (req, res) => {
    try {
        const pet = await Pet.create(req.body);
        res.status(201).json(pet);
    } catch (err) {
        res.status(400).json({
        error: "Error al crear el animal",
        detalles: err.message,
        });
    }
};

/**
 * PUT /api/pets/:id
 * - Actualiza un animal existente.
 * - { new: true } devuelve el documento actualizado.
 * - { runValidators: true } respeta las validaciones del Schema.
 * - Si no existe, 404. Si todo va bien, 200.
 */
const updatePet = async (req, res) => {
    try {
        const updated = await Pet.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updated) {
            return res.status(404).json({ error: "Animal no encontrado" });
        }
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json({
        error: "Error al actualizar el animal",
        detalles: err.message,
        });
    }
};

/**
 * DELETE /api/pets/:id
 * - Elimina un animal por su ID.
 * - Si no existe, 404. Si se elimina, 200 con mensaje de confirmación.
 */
const deletePet = async (req, res) => {
    try {
        const deleted = await Pet.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: "Animal no encontrado" });
        }
        res.status(200).json({ mensaje: "Animal eliminado correctamente" });
    } catch (err) {
        res.status(400).json({
        error: "Error al eliminar al animal",
        detalles: err.message,
        });
    }
};


/**
 * GET /api/pets/search?title=texto
 * Busca animales cuyo nombre contenga el texto indicado.
 */
const searchPetsByName = async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) return res.status(400).json({ error: "Debes indicar ?name=" });
            /*El primer argumento (name) es el texto que se quiere buscar.
            El segundo argumento ("i") indica que la búsqueda será insensible a mayúsculas minúsculas (no distingue entre "Matrix" y "matrix")*/
        const pets = await Pet.find({ name: new RegExp(name, "i") });
        res.status(200).json(pets);
    } catch (err) {
        res.status(500).json({ error: "Error al buscar Animal", detalles: err.message });
    }
};

/**
 * GET /api/pets/animal/:animal
 * Devuelve todas las animales que pertenecen a un tipo concreto ["Perro", "Gato", "Pajaro", "Pez", "Hamster"]
 */
const getPetsByAnimal = async (req, res) => {
    try {
        const { animal } = req.params;
        const pets = await Pet.find({ animal });
        res.status(200).json(pets);
    } catch (err) {
        res.status(500).json({ error: "Error al filtrar por tipo", detalles: err.message });
    }
};


/**
 * GET /api/pets/random
 * Devuelve un animal aleatorio
 */
const getRandomPet = async (req, res) => {
    try {
        const total = await Pet.countDocuments();
        if (total === 0) return res.status(404).json({ error: "No hay animales disponibles" });
        const randomIndex = Math.floor(Math.random() * total);
        const pet = await Pet.findOne().skip(randomIndex);
        res.status(200).json(pet);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener un animal aleatorio", detalles: err.message });
    }
};

/**
 * POST /api/pets/bulk
 * Inserta varias animales de una sola vez
 */
const bulkCreatePets = async (req, res) => {
    try {
        const pets = req.body;
        if (!Array.isArray(pets) || pets.length === 0) {
            return res.status(400).json({ error: "Debes enviar un array de animales" });
        }
        const inserted = await Pet.insertMany(pets);
        res.status(201).json({ cantidad: inserted.length, animales: inserted });
    } catch (err) {
        res.status(400).json({ error: "Error al insertar varios animales", detalles: err.message });
    }
};



module.exports = {
    getPets,
    getPetById,
    createPet,
    updatePet,
    deletePet,
    searchPetsByName,
    getPetsByAnimal,
    getRandomPet,
    bulkCreatePets
};