const Shelter = require("../models/shelter.model");
const { deleteImgCloudinary } = require("../../utils/cloudinary.util");

/**
 * POST /api/shelters -> Método para crear una nueva protectora
 * Si todo va bien, responde 201
 */
const postShelter = async (req, res) => {
    try {
        const newShelter = new Shelter(req.body);
        
        if (req.file) newShelter.image = req.file.path; // Si se subió un archivo, guardamos su información

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
        const shelter = await Shelter.findById(id).populate("pets"); // .populate("pets") para convertir los IDs en los objetos completos de las mascotas
        
        if (!shelter) return res.status(404).json({ message: "Protectora no encontrada" });
        
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
        const prevShelter = await Shelter.findById(id);
        if (!prevShelter) return res.status(404).json({ message: "Protectora no encontrada" });
        
        const updates = { ...req.body };    // prepara los datos de actualización desde el body
        let newImgId = null;
        
        if (req.file) { //si llega una imagen nueva a través de Insomnia
            updates.image = req.file.path; // actualiza la URL en la BBDD
            newImgId = req.file.path;      //usa esto como flag de que hay cambio
        }
        
        const shelterUpdated = await Shelter.findByIdAndUpdate(id, updates, {   // actualiza la protectora en MongoDB
            new: true, // devuelve el documento ya modificado
            runValidators: true,
        });
        
        if (newImgId && prevShelter.image) await deleteImgCloudinary(prevShelter.image); //elimina la imagen anterior SOLO después de actualizar con éxito

        return res.status(200).json(shelterUpdated);

    } catch (error) {
        if (req.file) {
            await deleteImgCloudinary(req.file.path);
        }
        return res.status(400).json({ error: "No se ha podido actualizar la protectora" });
    }
};

    /**
     * DELETE /api/shelters/:id -> para eliminar una protectora de la base de datos
     */
const deleteShelter = async (req, res) => {
    try {
        const { id } = req.params;
        const shelterToDelete = await Shelter.findById(id);

        if (!shelterToDelete) return res.status(404).json({ message: "La protectora no existe" });
        
        if (shelterToDelete.image) deleteImgCloudinary(shelterToDelete.image) // si la protectora tiene una imagen guardada, llamamos a la utilidad

        await Shelter.findByIdAndDelete(id);    // borra el registro de MongoDB
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
        const allShelters = await Shelter.find().populate("pets");   // busca todas las protectoras y traemos la info de sus mascotas
        if (allShelters.length === 0) return res.status(404).json({ message: "No hay protectoras registradas" });
        return res.status(200).json(allShelters);

    } catch (error) {
        return res.status(500).json({ 
            message: "Error al obtener las protectoras",
            error: error.message 
        });
    }
};

module.exports = { postShelter, getShelter, putShelter, deleteShelter, getAllShelters };

