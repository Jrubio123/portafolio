// connection.js
const { Pool } = require('pg'); // Importamos Pool para manejar la conexión a PostgreSQL

// Configuración de conexión
const pool = new Pool({
  user: 'postgres', // Cambia esto si usas otro usuario
  host: 'localhost', // El contenedor está expuesto localmente
  database: 'postgres', // Reemplaza con el nombre de tu base de datos
  password: 'hola123', // Contraseña del contenedor
  port: 5432, // Puerto predeterminado de PostgreSQL
});

// Verificar conexión
pool
  .connect()
  .then(() => console.log('Conexión exitosa a PostgreSQL'))
  .catch((err) => console.error('Error al conectar a PostgreSQL:', err));

module.exports = pool; // Exportamos el pool para usarlo en otros archivos
