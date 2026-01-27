# User Auth & Role Management API 🔐

Este proyecto es una solución de **Backend** centrada en la gestión robusta de usuarios, implementando un sistema completo de autenticación, autorización por roles y gestión de perfiles multimedia.

## 🎯 Objetivo del Proyecto
Desarrollar una base sólida de gestión de identidades que cumpla con los siguientes requisitos técnicos:
* **Autenticación Segura:** Registro y Login utilizando **JWT (JSON Web Tokens)** y encriptación de contraseñas con **bcrypt**.
* **Gestión de Roles:** Diferenciación de permisos entre usuarios estándar (`user`) y administradores (`admin`).
* **Integridad de Datos:** Control estricto para evitar duplicados en los arrays de datos relacionados.
* **Gestión Multimedia:** Subida de imágenes de perfil mediante el middleware de **Cloudinary** y borrado automático al eliminar la cuenta.
* **Arquitectura:** Servidor Express conectado a MongoDB Atlas con una estructura de carpetas profesional.

---

## 🛠️ Tecnologías utilizadas
* **Node.js & Express** - Motor del servidor.
* **MongoDB Atlas** - Base de datos NoSQL.
* **Mongoose** - Modelado de datos y validaciones.
* **JSON Web Token** - Manejo de sesiones seguras.
* **Bcrypt** - Hashing de contraseñas.
* **Cloudinary & Multer** - Procesamiento y almacenamiento de imágenes.

---

## 📂 Estructura de Carpetas
```text
src/
├── api/
│   ├── controllers/   # Lógica de Registro, Login y Gestión de Usuarios
│   ├── models/        # Esquemas (User con campos de Rol e Imagen)
│   └── routes/        # Endpoints protegidos y públicos
├── config/            # Conexión a DB y Cloudinary
├── middlewares/       # Auth (isAuth) y File upload
├── utils/             # Generación de Tokens y validaciones
└── index.js           # Punto de entrada
```