const cloudinary = require('cloudinary').v2;

const deleteImgCloudinary = (imgUrl) => {
    // 1. Dividimos la URL por las barras
    const imgSplitted = imgUrl.split('/');
    
    // 2. Sacamos el nombre del archivo con la extensión (ej: "foto.jpg")
    const nameSplitted = imgSplitted[imgSplitted.length - 1].split('.');
    
    // 3. Obtenemos el public_id (la carpeta + el nombre sin extensión)
    // Si tus imágenes están en una carpeta, ajusta el índice. 
    // Si no tienen carpeta, con nameSplitted[0] suele bastar.
    const folderName = imgSplitted[imgSplitted.length - 2];
    const public_id = `${folderName}/${nameSplitted[0]}`;

    // 4. Ejecutamos el borrado
    cloudinary.uploader.destroy(public_id, () => {
        console.log('Imagen eliminada de Cloudinary');
    });
};

module.exports = { deleteImgCloudinary };