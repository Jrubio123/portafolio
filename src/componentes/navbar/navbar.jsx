import React from 'react';
import Styles from "./Navbar.modulo.css"; // Asegúrate de que exista este archivo correctamente

export const Navbar = () => {
    return (
        <nav className={Styles.navbar}>
            <a style={Styles.titulo} href='/'>Portafolio</a>
            <div className={Styles.menu}>
                <ul className={Styles.menuItems}>
                    <li>
                        <a href='#acerca'>Acerca de</a>
                    </li>
                    <li>
                        <a href='#experiencia'>Experiencia</a>
                    </li>
                    <li>
                        <a href='#proyectos'>Proyectos</a>
                    </li>
                    <li>
                        <a href='#contacto'>Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
