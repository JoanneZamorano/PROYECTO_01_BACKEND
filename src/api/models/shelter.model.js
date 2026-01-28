const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shelterSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        address: { type: String, required: true, trim: true },
        contactEmail: { type: String, required: true, trim: true },
        phone: { type: Number, required: false },
        // relación con Pets
        pets: [
        {
            type: Schema.Types.ObjectId,
            ref: "Pet",
        },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Shelter = mongoose.model("Shelter", shelterSchema);
module.exports = Shelter;