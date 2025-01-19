// auth.js
const pool = require('./connection'); // Importamos el pool de conexión
const bcrypt = require('bcrypt'); // Para encriptar contraseñas

// Función para registrar un nuevo usuario
const registrarUsuario = async (nombre, usuario, correo, contraseña) => {
  try {
    const hash = await bcrypt.hash(contraseña, 10); // Encriptamos la contraseña
    const query = `
      INSERT INTO usuarios (nombre, usuario, correo, contraseña)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [nombre, usuario, correo, hash];
    const result = await pool.query(query, values);

    console.log('Usuario registrado:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    throw error;
  }
};

// Función para iniciar sesión
const iniciarSesion = async (usuario, contraseña) => {
  try {
    const query = `SELECT * FROM usuarios WHERE usuario = $1;`;
    const values = [usuario];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      throw new Error('Usuario no encontrado');
    }

    const usuarioDB = result.rows[0];
    const match = await bcrypt.compare(contraseña, usuarioDB.contraseña); // Comparamos contraseñas

    if (!match) {
      throw new Error('Contraseña incorrecta');
    }

    // Actualizamos la fecha de último inicio de sesión
    const updateQuery = `
      UPDATE usuarios
      SET ultimo_inicio_sesion = NOW()
      WHERE id = $1;
    `;
    await pool.query(updateQuery, [usuarioDB.id]);

    console.log('Inicio de sesión exitoso para:', usuario);
    return usuarioDB;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

module.exports = { registrarUsuario, iniciarSesion };
