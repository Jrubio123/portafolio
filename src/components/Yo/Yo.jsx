import React from "react";

import styles from "./Yo.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy juan pablo</h1>
        <p className={styles.description}>
          Aqui hablar un poco sobre mi
        </p>
        <a href="mailto:juanpablo.rubio990221@gmail.com" className={styles.contactBtn}>
          Contactame
        </a>
      </div>
      <img
        src={getImageUrl("yo/heroImage.png")}
        alt="imagen mia"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
