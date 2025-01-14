import React, { useState } from 'react';

export function Registro() {
    const [formData, setFormData] = useState({
        nombre: '',
        usuario: '',
        contrasena: '',
        fechaNacimiento: ''
    });

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Envía los datos al backend
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
        try {
            const response = await fetch('http://localhost:5000/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            alert(data.message); // Mensaje de éxito o error del backend
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Registro</h1>
            <label>
                Nombre:
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </label>
            <label>
                Usuario:
                <input type="text" name="usuario" value={formData.usuario} onChange={handleChange} required />
            </label>
            <label>
                Contraseña:
                <input type="password" name="contrasena" value={formData.contrasena} onChange={handleChange} required />
            </label>
            <label>
                Fecha de Nacimiento:
                <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} />
            </label>
            <button type="submit">Registrarse</button>
        </form>
    );
}
