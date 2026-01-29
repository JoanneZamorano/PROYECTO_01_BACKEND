const Shelter = require("../models/shelter.model");
const { deleteImgCloudinary } = require("../../utils/cloudinary.util");

/**
 * POST /api/shelters -> Método para crear una nueva protectora
 * Si todo va bien, responde 201
 */
const postShelter = async (req, res) => {
    try {
        const newShelter = new Shelter(req.body);

        // Si se subió un archivo, guardamos su información
        if (req.file) {
        newShelter.image = req.file.path;      // secure_url
        }

        const shelterSaved = await newShelter.save();
        return res.status(201).json(shelterSaved);
    } catch (err) {
        res.status(400).json({
        error: "Error al crear la protectora",
        detalles: err.message,
        });
    }
    };


/**
* GET /api/shelters/:id -> Método para obtener una protectora con todos sus animales detallados
 * Si todo va bien, responde 200
 */
    const getShelter = async (req, res) => {
    try {
        const { id } = req.params;
        // Usamos .populate("pets") para convertir los IDs en los objetos completos de las mascotas
        const shelter = await Shelter.findById(id).populate("pets");
        
        if (!shelter) {
        return res.status(404).json({ message: "Protectora no encontrada" });
        }
        
        return res.status(200).json(shelter);
    } catch (error) {
        return res.status(400).json({ error: "No se ha podido obtener la protectora" });
    }
};

/**
 * PUT /api/shelters/:id -> para actualizar datos de contacto o añadir animales
 */
const putShelter = async (req, res) => {
    try {
        const { id } = req.params;
        const shelterUpdated = await Shelter.findByIdAndUpdate(id, req.body, { new: true });    // {new: true} devuelve el documento ya actualizado
        
        if (!shelterUpdated) {
        return res.status(404).json({ message: "Protectora no encontrada" });
        }
        return res.status(200).json(shelterUpdated);
    } catch (error) {
        return res.status(400).json({ error: "No se ha podido actualizar la protectora" });
    }
    };

    /**
     * DELETE /api/shelters/:id -> para eliminar una protectora de la base de datos
     */
const deleteShelter = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Buscamos la protectora antes de borrarla para saber qué imagen tiene
        const shelterToDelete = await Shelter.findById(id);

        if (!shelterToDelete) {
            return res.status(404).json({ message: "La protectora no existe" });
        }

        // Si la protectora tiene una imagen guardada, llamamos a la utilidad
        if (shelterToDelete.image) {
            deleteImgCloudinary(shelterToDelete.image);
        }

        // Ahora borramos el registro de MongoDB
        await Shelter.findByIdAndDelete(id);

        return res.status(200).json({ message: "Protectora e imagen borradas con éxito" });
    } catch (error) {
        return res.status(500).json({ error: "Error al eliminar la protectora" });
    }
};

    /**
     * GET /api/shelters/ -> para traer todas las protectoras
     */
const getAllShelters = async (req, res) => {
    try {
        // Buscamos todas las protectoras y traemos la info de sus mascotas
        const allShelters = await Shelter.find().populate("pets");
        
        if (allShelters.length === 0) {
            return res.status(404).json({ message: "No hay protectoras registradas" });
        }

        return res.status(200).json(allShelters);
    } catch (error) {
        return res.status(500).json({ 
            message: "Error al obtener las protectoras",
            error: error.message 
        });
    }
};

module.exports = { postShelter, getShelter, putShelter, deleteShelter, getAllShelters };

