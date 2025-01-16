import React from "react"; // Importamos React para usar JSX y componentes.

import styles from "./Projects.module.css"; // Importamos los estilos específicos del componente "Projects".
import projects from "../../data/projects.json"; // Importamos un archivo JSON que contiene información de los proyectos.
import { ProjectCard } from "./ProjectCard"; // Importamos el componente "ProjectCard", que se usará para mostrar cada proyecto.

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      {/* Sección principal que contendrá todos los proyectos. 
          La clase `styles.container` aplica estilos al contenedor principal.
      */}
      <h2 className={styles.title}>Proyectos</h2>
      {/* Título de la sección con estilos personalizados. */}
      <h3 className={styles.description}>Actualmente solo se cuenta con el diseño de esta página. A medida que se vayan creando más proyectos, estos se irán agregando en esta sección.</h3>
      
      <div className={styles.projects}>
        {/* Contenedor para las tarjetas de proyectos. */}

        {projects.map((project, id) => {
          /* Iteramos sobre la lista de proyectos (del archivo JSON) usando `map`.
             Por cada proyecto, renderizamos un componente `ProjectCard` y pasamos los datos del proyecto como props. 
          */
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
