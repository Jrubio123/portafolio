import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, mi nombre es Juan Pablo.</h1>
        <p className={styles.description}>
        Soy ingeniero en sistemas recién egresado con conocimientos en HTML, CSS, SQL. 
        Actualmente estoy aprendiendo React y Java para expandir mis habilidades en desarrollo web y aplicaciones. 
        Me apasiona resolver problemas y crear soluciones eficientes.
        </p>
        <a href="mailto:jprubio1152@gmail.com" className={styles.contactBtn}>
          Contactame
        </a>
      </div>
      <img
        src={getImageUrl("hero/yo.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
