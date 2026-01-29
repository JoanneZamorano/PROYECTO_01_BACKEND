const Pet = require("../models/pet.model");
const { deleteImgCloudinary } = require("../../utils/cloudinary.util");
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
        const newPet = new Pet(req.body);

        if (req.file) {
            newPet.image = req.file.path; // O req.file.secure_url según tu config
        }

        const petSaved = await newPet.save();
        
        res.status(201).json(petSaved);
    } catch (err) {
        res.status(400).json({
            error: "Error al crear el animal",
            detalles: err.message
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
        const { id } = req.params;
        // 1. Buscamos el animal actual para tener la referencia de la imagen vieja
        const prevPet = await Pet.findById(id);
        if (!prevPet) return res.status(404).json({ error: "Animal no encontrado" });
        // 2. Preparamos los datos de actualización desde el body
        const updates = { ...req.body };
        let newImgId = null;
        // 3. Si llega una imagen nueva a través de Insomnia
        if (req.file) {
            updates.image = req.file.path; // Actualizamos la URL en la BBDD
            newImgId = req.file.path;      // Usamos esto como flag de que hay cambio
        }
        // 4. Actualizamos el animal en MongoDB
        const updated = await Pet.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        });
        // 5. Eliminamos la imagen anterior SOLO después de actualizar con éxito
        // Comprobamos si hay imagen nueva Y si el animal ya tenía una imagen previa
        if (newImgId && prevPet.image) {
            await deleteImgCloudinary(prevPet.image);
        }
        return res.status(200).json(updated);
        
    } catch (err) {
        // Si hay un error y se llegó a subir una imagen a Cloudinary, la borramos para no dejar basura
        if (req.file) await deleteImgCloudinary(req.file.path);
        
        return res.status(400).json({
            error: "Error actualizando el animal",
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
        const { id } = req.params;
        const petToDelete = await Pet.findById(id);

        if (!petToDelete) {
            return res.status(404).json({ message: "Animal no encontrado" });
        }

        if (petToDelete.image) {
            deleteImgCloudinary(petToDelete.image);
        }

        await Pet.findByIdAndDelete(id);
        return res.status(200).json({ message: "Animal e imagen borradas con éxito" });
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