const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            trim: true,
            required: true,
            minlength: [8, "La contraseña debe tener al menos 8 caracteres"],
        },
        role: { 
            type: String, 
            enum: ["admin", "trabajador", "padrino"], 
            default: "padrino" 
        },
        shelter: { type: mongoose.Types.ObjectId, ref: "Shelter" },  // Si es trabajador, vinculado a una protectora
        adoptedPets: [{ type: mongoose.Types.ObjectId, ref: "Pet" }] // Si es padrino, lista de animales que apadrina
    },
    { timestamps: true }
);


// Middleware -> encriptar contraseña antes de guardar

userSchema.pre("save", async function () { // Quitamos 'next' y usamos 'async'
    if (!this.isModified("password")) {
        return; // En funciones async, solo con return basta para continuar
    }

    try {
        this.password = bcrypt.hashSync(this.password, 10);
    } catch (error) {
        throw new Error("Error al encriptar la contraseña");
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
