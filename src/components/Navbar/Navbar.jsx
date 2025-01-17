import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú móvil
  const [subMenuOpen, setSubMenuOpen] = useState(false); // Estado para el submenú de "Aplicaciones"

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portafolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
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
          {/* Botón para "Aplicaciones" con submenú */}
          <li className={styles.dropdown}>
            <a
              href="#!"
              onClick={(e) => {
                e.preventDefault(); // Previene el comportamiento predeterminado del enlace (navegación a una nueva página).
                setSubMenuOpen(!subMenuOpen); // Cambia el estado del submenú (lo abre/cierra).
              }}
            >
              Aplicaciones <span>{subMenuOpen ? "▲" : "▼"}</span>
              {/* La flecha cambia según el estado del submenú: ▲ si está abierto, ▼ si está cerrado. */}
            </a>
            {subMenuOpen && (
              <ul className={styles.subMenu}>
                <li>
                  <a href="/gestor-gastos">Gestor de Gastos</a>
                  {/* Un enlace dentro del submenú que lleva al usuario a la aplicación "Gestor de Gastos". */}
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#login">Iniciar sesión</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
