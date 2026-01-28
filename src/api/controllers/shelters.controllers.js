const Shelter = require("../models/shelter.model");


/**
 * POST /api/shelters -> Método para crear una nueva protectora
 * Si todo va bien, responde 201
 */
const postShelter = async (req, res) => {
    try {
        const newShelter = new Shelter(req.body);
        const shelterSaved = await newShelter.save();
        return res.status(201).json(shelterSaved);
    } catch (error) {
        return res.status(400).json({ error: "No se ha podido crear la protectora" });
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
        const shelterDeleted = await Shelter.findByIdAndDelete(id);
        
        if (!shelterDeleted) {
        return res.status(404).json({ message: "Protectora no encontrada" });
        }
        
        return res.status(200).json({
        message: "Protectora eliminada correctamente",
        deleted: shelterDeleted
        });
    } catch (error) {
        return res.status(400).json({ error: "No se ha podido eliminar la protectora" });
    }
};


module.exports = { postShelter, getShelter, putShelter, deleteShelter };

