# PawAdopt API 🐾 - Sistema de Gestión de Adopciones

Esta API REST es una plataforma integral diseñada para conectar a usuarios con protectoras de animales en toda España. Permite gestionar el catálogo de mascotas disponibles, las sedes de las protectoras y el proceso de adopción de forma segura y organizada.

## 🎯 Objetivo del Proyecto
El proyecto implementa un sistema de backend robusto con tres modelos de datos interrelacionados, cumpliendo con los siguientes requisitos:
* **Autenticación y Autorización:** Registro y login con **JWT** y roles diferenciados (`user`/`admin`).
* **Relaciones Complejas:** Conexión entre Protectoras, Animales y Usuarios.
* **Gestión Multimedia:** Subida y borrado de imágenes de perfiles y mascotas mediante **Cloudinary**.
* **Integridad de Datos:** Validación para evitar duplicados en los arrays de adopciones y favoritos.

---

## 🏗️ Modelos de Datos

### 1. Usuarios (`User`)
* **Campos:** Nombre, email, password (encriptada), foto de perfil y rol.
* **Relación:** Array de `animales_adoptados` que referencia al modelo de Mascotas.

### 2. Animales (`Pet`)
* **Campos:** Nombre, especie (perro, gato, ave, etc.), edad, descripción, foto y estado.
* **Relación:** Campo `protectora` que vincula al animal con su centro de origen.

### 3. Protectoras (`Shelter`)
* **Campos:** Nombre (ej. Protectora de Guadalajara), ubicación/provincia, contacto y logo.
* **Relación:** Array de `animales` que lista todos los especímenes disponibles en esa sede.

---

## 🛠️ Tecnologías utilizadas
* **Node.js & Express** - Motor del servidor.
* **MongoDB Atlas** - Base de datos NoSQL.
* **Mongoose** - Modelado de datos y validaciones.
* **JSON Web Token** - Manejo de sesiones seguras.
* **Bcrypt** - Hashing de contraseñas.
* **Cloudinary & Multer** - Procesamiento y almacenamiento de imágenes

---

## 📂 Estructura del Proyecto
```text
src/
├── api/
│   ├── controllers/   # Lógica de Usuarios, Mascotas y Protectoras
│   ├── models/        # Esquemas de Mongoose (User, Pet, Shelter)
│   └── routes/        # Endpoints (públicos y protegidos)
├── config/            # Configuración de DB y Cloudinary
├── middlewares/       # Auth (isAuth) y Multer (subida de fotos)
├── utils/             # Generación de Tokens y Seeds
└── index.js           # Punto de entrada
```
