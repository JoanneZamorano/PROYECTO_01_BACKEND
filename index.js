require("dotenv").config();
const express = require("express");

const { connectDB } = require("./src/config/db");
//const { connectCloudinary } = require("./src/config/cloudinary");

const petRoutes = require("./src/api/routes/pets.routes");  // importamos el router
const shelterRoutes = require("./src/api/routes/shelters.routes");
//const userRoutes = require("./src/api/routes/user.routes");


const app = express();
app.use(express.json());
connectDB();
//connectCloudinary();

app.use("/api/pets", petRoutes);    // Montamos el router en la ruta base /api/movies
app.use("/api/shelters", shelterRoutes);
//app.use("/api/users", userRoutes);


// Middleware 404
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en <http://localhost:3000>");
});
