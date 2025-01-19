import React, { useState } from "react";
import styles from "./Navbar.module.css";  // Importa los estilos CSS modulares
import { getImageUrl } from "../../utils";  // Utilidad para obtener URLs de imágenes

export const Navbar = () => {
  // Estados del componente
  const [menuOpen, setMenuOpen] = useState(false);          // Controla la visibilidad del menú en móviles
  const [appsMenuOpen, setAppsMenuOpen] = useState(false);  // Controla el dropdown de Aplicaciones
  const [loginMenuOpen, setLoginMenuOpen] = useState(false);// Controla el dropdown de Login/Registro
  const [isRegister, setIsRegister] = useState(false);      // Controla si se muestra el form de registro o login

  return (
    <nav className={styles.navbar}>
      {/* Logo/Título que enlaza a la página principal */}
      <a className={styles.title} href="/">
        Portafolio
      </a>

      {/* Contenedor principal del menú */}
      <div className={styles.menu}>
        {/* Botón hamburguesa para móviles */}
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")  // Icono X cuando está abierto
              : getImageUrl("nav/menuIcon.png")   // Icono hamburguesa cuando está cerrado
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}  // Alterna el estado del menú
        />

        {/* Lista de elementos del menú */}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}  // Aplica clase adicional si está abierto
          onClick={() => setMenuOpen(false)}  // Cierra el menú al hacer clic
        >
          {/* Enlaces de navegación principales */}
          <li><a href="#about">Acerca</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>

          {/* Dropdown de Aplicaciones */}
          <li className={styles.dropdown}>
            <a
              href="#apps"
              onClick={(e) => {
                e.preventDefault();
                setAppsMenuOpen(!appsMenuOpen);    // Alterna el menú de aplicaciones
                setLoginMenuOpen(false);           // Cierra el menú de login si está abierto
              }}
            >
              Aplicaciones <span>{appsMenuOpen ? "▲" : "▼"}</span>  {/* Flecha indicadora */}
            </a>
            {/* Submenú de aplicaciones - solo se muestra si appsMenuOpen es true */}
            {appsMenuOpen && (
              <ul className={styles.subMenu}>
                <li><a href="/gestor-gastos">Gestor de Gastos</a></li>
              </ul>
            )}
          </li>

          {/* Dropdown de Login/Registro */}
          <li className={styles.dropdown}>
            <a
              href="#login"
              onClick={(e) => {
                e.preventDefault();
                setLoginMenuOpen(!loginMenuOpen);   // Alterna el menú de login
                setAppsMenuOpen(false);            // Cierra el menú de aplicaciones
                setIsRegister(false);              // Muestra el formulario de login por defecto
              }}
            >
              {isRegister ? "Registro" : "Iniciar sesión"}  {/* Texto dinámico según el modo */}
              <span>{loginMenuOpen ? "▲" : "▼"}</span>
            </a>

            {/* Submenú de login/registro - solo se muestra si loginMenuOpen es true */}
            {loginMenuOpen && (
              <ul className={styles.subMenu}>
                {/* Renderizado condicional: Muestra formulario de login o registro */}
                {!isRegister ? (
                  <>
                    {/* Formulario de Login */}
                    <li>
                      <h3>Usuario</h3>
                      <input type="text" name="username" placeholder="Ingresa tu usuario" />
                    </li>
                    <li>
                      <h3>Ingrese Contraseña</h3>
                      <input type="password" name="password" placeholder="Ingresa tu contraseña" />
                    </li>
                    <li>
                      <button
                        className={styles.loginButton}
                        onClick={() => console.log("Iniciar sesión clicado")}
                      >
                        Ingresar
                      </button>
                    </li>
                    {/* Enlace para cambiar al modo registro */}
                    <li>
                      <a
                        href="#register"
                        className={styles.registerLink}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsRegister(true);
                        }}
                      >
                        ¿No tienes usuario? Registrarse
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    {/* Formulario de Registro */}
                    <li>
                      <h3>Nombre</h3>
                      <input type="text" name="name" placeholder="Ingresa tu nombre" />
                    </li>
                    <li>
                      <h3>Usuario</h3>
                      <input type="text" name="username" placeholder="Ingresa tu usuario" />
                    </li>
                    <li>
                      <h3>Correo</h3>
                      <input type="email" name="email" placeholder="Ingresa tu correo" />
                    </li>
                    <li>
                      <h3>Contraseña</h3>
                      <input type="password" name="password" placeholder="Ingresa tu contraseña" />
                    </li>
                    <li>
                      <button
                        className={styles.loginButton}
                        onClick={() => console.log("Registro clicado")}
                      >
                        Registrarse
                      </button>
                    </li>
                    {/* Enlace para volver al modo login */}
                    <li>
                      <a
                        href="#login"
                        className={styles.registerLink}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsRegister(false);
                        }}
                      >
                        ¿Ya tienes cuenta? Iniciar sesión
                      </a>
                    </li>
                  </>
                )}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};