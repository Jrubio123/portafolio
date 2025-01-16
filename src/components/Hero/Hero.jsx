import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.contenedor}>
      <div className={styles.contenido}>
        <h1 className={styles.titulo}>Hola, mi nombre es Juan Pablo.</h1>
        <p className={styles.descripcion}>
        Soy ingeniero en sistemas recién egresado con conocimientos en HTML, CSS, PHP, SQL y PL/SQL. 
        Actualmente estoy aprendiendo React y Java para expandir mis habilidades en desarrollo web y aplicaciones. 
        Me apasiona resolver problemas y crear soluciones eficientes.
        </p>
        <a href="mailto:juanpablo.rubio990221@gmail.com" className={styles.contactBtn}>
          Contactame
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
