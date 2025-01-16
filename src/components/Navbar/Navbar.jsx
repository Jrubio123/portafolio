// Navbar.jsx
// Componente de navegación que muestra el menú y maneja la funcionalidad responsive

import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portafolio
      </a>
      <div className={styles.menu}>
        
        <img
          className={styles.menuBtn /* Botón de menú hamburguesa que cambia según el estado */}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")// Icono cuando está abierto
              : getImageUrl("nav/menuIcon.png")// Icono hamburguesa cuando está cerrado
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)/* Lista de enlaces de navegación */}
        />
        <ul
         // Aplica clases condicionales según si el menú está abierto
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}// Cierra el menú al hacer clic
        >
          {/* Enlaces a las diferentes secciones */} 
          <li>
            <a href="#about">Acerca</a>
          </li>
          <li>
            <a href="#experience">Experiencia</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
