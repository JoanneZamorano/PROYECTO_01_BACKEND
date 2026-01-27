const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },     
        animal: { 
            type: String, 
            enum: ["Perro", "Gato", "Pajaro", "Pez", "Hamster"], 
            required: true,},
        year: { type: Number, min: 1990, max: 2100 }, //año de  nacimiento
        raza: { type: String, required: true, trim: true },
        gender: { type: String, enum: ["Macho", "Hembra"], required: true },
        size: { type: String, enum: ["Pequeño", "Mediano", "Grande"] },
        image: { type: String, required: true }, // URL de Cloudinary
        status: { 
            type: String, 
            enum: ["En adopción", "Adoptado", "Urgente"], 
            default: "En adopción" 
        },
    },
    {
        timestamps: true, // crea automáticamente createdAt y updatedAt
        versionKey: false // elimina el campo __v
    }
);

const Pet = mongoose.model("Pet", petSchema);
module.exports = Pet;