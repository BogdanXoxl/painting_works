import Image from "next/image";
import React from "react";

import styles from "./header.module.scss";
import { LogoImage, VKLogo, WatsAppLogo } from "./img";
import { LiLink } from "./LiLink";

const links = [
  { href: "services", title: "Услуги" },
  { href: "why-us", title: "Почему мы" },
  { href: "contact-us", title: "Контакты" },
];

export const Header = () => {
  return (
    <header className={styles.container}>
      <Image src={LogoImage} alt="logo" width={131} height={68} />
      <ul className={styles.links}>
        {links.map((link) => (
          <LiLink key={link.href} href={link.href} title={link.title} />
        ))}
      </ul>
      <div className={styles.socials}>
        <a href="tel:89600316803" className={styles.tel}>
          8 (960) 031-68-03
        </a>
        <div className={styles.icons}>
          <a href="https://vk.com/id60257941" target="_blank" rel="noopener noreferrer">
            <VKLogo />
          </a>
          <a href="https://wa.me/79053176516" target="_blank" rel="noopener noreferrer">
            <WatsAppLogo />
          </a>
        </div>
      </div>
    </header>
  );
};
