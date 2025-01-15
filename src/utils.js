//El archivo utils.js generalmente se utiliza para almacenar funciones que se pueden reutilizar en diferentes partes de tu aplicación

// La función getImageUrl toma un parámetro llamado "path".
// Este parámetro "path" representa la ruta o nombre de archivo de una imagen (como "logo.png").
export const getImageUrl = (path) => {
    // El constructor new URL() crea una URL completa.
    // /assets/${path} forma la ruta dinámica usando el valor de "path".
    // Por ejemplo, si pasas "logo.png" como "path", la ruta se convierte en /assets/logo.png.
    return new URL(`/assets/${path}`, import.meta.url).href; // Genera y devuelve la URL completa de la imagen.
  };
  