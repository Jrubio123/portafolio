import React from "react";
// Componente que muestra la experiencia profesional y habilidades técnicas
import styles from "./Experience.module.css";
// Importamos los datos de habilidades y experiencia desde archivos JSON
import skills from "../../data/skills.json";// Lista de habilidades técnicas
import history from "../../data/history.json";// Historial laboral
// Importamos la utilidad para manejar las rutas de las imágenes
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    
    <section className={styles.container} id="experience">
      {/* Título principal de la sección */}
      <h2 className={styles.title}>Experiencia</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer }>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                {/* Nombre de la habilidad */}
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
                // Elemento individual de experiencia laboral
              <li key={id} className={styles.historyItem}>
                {/* Logo de la empresa */}
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                {/* Contenedor para los detalles del trabajo */}
                <div className={styles.historyItemDetails}>
                     {/* Cargo y empresa */}
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  {/* Período de trabajo */}
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  {/* Lista de responsabilidades/logros */}
                  <ul>
                    {/* Iteramos sobre cada experiencia específica */}
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
