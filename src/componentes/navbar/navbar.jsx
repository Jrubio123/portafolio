import React from 'react';
import Styles from "./Navbar.module.css"; 

export const Navbar = () => {
    return (
        <nav className={Styles.navbar}>
            <a className={Styles.titulo} href='/'>Portafolio</a>
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
