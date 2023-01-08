import Image from "next/image";
import React from "react";

import ITEMS from "./helpers/items.json";
import { ManImage, PeopleImage, WomanImage } from "./img";
import styles from "./whyUs.module.scss";

export const WhyUs = () => {
  return (
    <div className={styles.wrapper} id="why-us">
      <div>
        <h2 className={styles.title}>Почему выбирают именно нас</h2>
        <p className={styles.subtitle}>
          С нашей помощью Вы сможете заказать малярные&nbsp;работы, не выходя из дома.
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.big_image_item}>
          <Image src={PeopleImage} alt="Сотрудники" placeholder="blur" fill />
        </div>

        {ITEMS.slice(0, 2).map((item) => (
          <div key={item.title} className={styles.item}>
            <h3 className={styles.item_title}>{item.title}</h3>
            <p className={styles.item_text}>{item.text}</p>
          </div>
        ))}

        <div className={styles.mob_img1}>
          <Image src={ManImage} alt="Сотрудник" placeholder="blur" fill />
        </div>
        <div className={styles.mob_img2}>
          <Image src={WomanImage} alt="Сотрудница" placeholder="blur" fill />
        </div>

        {ITEMS.slice(2).map((item) => (
          <div key={item.title} className={styles.item}>
            <h3 className={styles.item_title}>{item.title}</h3>
            <p className={styles.item_text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
