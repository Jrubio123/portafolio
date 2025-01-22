import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [appsMenuOpen, setAppsMenuOpen] = useState(false);
  const [loginMenuOpen, setLoginMenuOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5173/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registro exitoso!");
        setIsRegister(false);
        setFormData({
          name: '',
          username: '',
          email: '',
          password: ''
        });
      } else {
        alert(data.error || "Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión con el servidor");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5173/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login exitoso!");
        setLoginMenuOpen(false);
        // Aquí podrías guardar el usuario en localStorage o estado global
      } else {
        alert(data.error || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión con el servidor");
    }
  };

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
          <li className={styles.dropdown}>
            <a
              href="#apps"
              onClick={(e) => {
                e.preventDefault();
                setAppsMenuOpen(!appsMenuOpen);
                setLoginMenuOpen(false);
              }}
            >
              Aplicaciones <span>{appsMenuOpen ? "▲" : "▼"}</span>
            </a>
            {appsMenuOpen && (
              <ul className={styles.subMenu}>
                <li><a href="/gestor-gastos">Gestor de Gastos</a></li>
              </ul>
            )}
          </li>
          <li className={styles.dropdown}>
            <a
              href="#login"
              onClick={(e) => {
                e.preventDefault();
                setLoginMenuOpen(!loginMenuOpen);
                setAppsMenuOpen(false);
                setIsRegister(false);
              }}
            >
              {isRegister ? "Registro" : "Iniciar sesión"} <span>{loginMenuOpen ? "▲" : "▼"}</span>
            </a>
            {loginMenuOpen && (
              <ul className={styles.subMenu}>
                {!isRegister ? (
                  <form onSubmit={handleLogin}>
                    <li>
                      <h3>Usuario</h3>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Ingresa tu usuario"
                      />
                    </li>
                    <li>
                      <h3>Contraseña</h3>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Ingresa tu contraseña"
                      />
                    </li>
                    <li>
                      <button className={styles.loginButton} type="submit">
                        Ingresar
                      </button>
                    </li>
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
                  </form>
                ) : (
                  <>
                    <form onSubmit={handleRegister}>
                      <li><h3>Nombre</h3><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ingresa tu nombre" /></li>
                      <li><h3>Usuario</h3><input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Ingresa tu usuario" /></li>
                      <li><h3>Correo</h3><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ingresa tu correo" /></li>
                      <li><h3>Contraseña</h3><input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Ingresa tu contraseña" /></li>
                      <li>
                        <button
                          className={styles.loginButton}
                          type="submit"
                        >
                          Registrarse
                        </button>
                      </li>
                    </form>
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
