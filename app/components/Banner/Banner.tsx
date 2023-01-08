import Image from "next/image";
import React from "react";

import styles from "./banner.module.scss";
import { Button } from "./Button";
import { BannerImage, MedalImage, PaintBrushImage, WalletImage } from "./img";

export const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <Image src={BannerImage} alt="banner" fill placeholder="blur" />
      </div>

      <div className={styles.content}>
        <div className={styles.title_block}>
          <h1 className={styles.title}>Малярные работы под ключ</h1>
          <p className={styles.subtitle}>Мы поможем осуществить ваши желания!</p>
          <Button href="form">Связаться с нами</Button>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.item_title}>
              <Image src={MedalImage} alt="медаль" className={styles.icon} />
              <h2>Мастера своего дела</h2>
            </div>
            <p className={styles.item_subtitle}>
              В нашей компании работают профессиональные специалисты
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.item_title}>
              <Image src={PaintBrushImage} alt="кисть" className={styles.icon} />
              <h2>Качественное исполнение</h2>
            </div>

            <p className={styles.item_subtitle}>
              Наши клиенты остаются всегда довольными, так как мы выполняем все качественно
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.item_title}>
              <Image src={WalletImage} alt="кошелек" className={styles.icon} />
              <h2>Доступная стоимость</h2>
            </div>
            <p className={styles.item_subtitle}>
              Мы предлагаем штукатурно-малярные работы по выгодным ценам
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
