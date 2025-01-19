// About.jsx
// Componente que muestra la sección "Acerca de" con información personal y profesional

import React from "react";
// Importamos los estilos específicos para este componente

import styles from "./About.module.css";
// Importamos la utilidad para manejar las rutas de las imágenes

import { getImageUrl } from "../../utils";

export const About = () => {
  return (
     // Contenedor principal de la sección con ID para navegación
    <section className={styles.container} id="about">
      {/* Título principal de la sección */}
      <h2 className={styles.title}>Acerca de mi</h2>
       {/* Contenedor que agrupa la imagen principal y la lista de habilidades */}
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}// Usa la utilidad para obtener la ruta de la imagen
          alt="imagen_acerca"   // Texto alternativo para accesibilidad
          className={styles.aboutImage}
        />
        {/* Lista de áreas de experiencia/especialidades */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desarrollador Front</h3>
              <p>
                Aprendizaje continuo en HTML, CSS y PHP, creando interfaces web funcionales.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Desarrollador Back</h3>
              <p>
              Conocimientos en bases de datos y aprendizaje continuo en desarrollo backend.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Soporte TI</h3>
              <p>
                Especialista en resolución de incidentes y optimización de sistemas.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/university.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Egresado de la UPB</h3>
              <p>
                Graduado en ingenieria en sistemas e informatica de la Universidad Pontificia Bolivariana de Medellín
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
