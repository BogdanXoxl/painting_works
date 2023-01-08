import Image from "next/image";
import React from "react";

import styles from "./footer.module.scss";
import { LogoImage, VKLogo, WatsAppLogo } from "./img";

export const Footer = () => {
  return (
    <footer className={styles.wrapper} id="contact-us">
      <Image src={LogoImage} alt="logo" width={108} height={48} />
      <h2>Всегда на связи</h2>
      <span>
        Тел: <a href="tel:89600316803">8 (960) 031-68-03</a>
      </span>
      <div className={styles.icons}>
        <a href="https://vk.com/id60257941" target="_blank" rel="noopener noreferrer">
          <VKLogo />
        </a>
        <a href="https://wa.me/79053176516" target="_blank" rel="noopener noreferrer">
          <WatsAppLogo />
        </a>
      </div>
      <span>©Sebastian._.bah/Kazan/OOO 2022</span>
    </footer>
  );
};
