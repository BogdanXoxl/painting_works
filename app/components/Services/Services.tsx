import React from "react";

import { CardItem } from "./CardItem";
import ITEMS from "./helpers/items.json";
import type { IMGType } from "./img";
import { IMAGES } from "./img";
import styles from "./services.module.scss";

export const Services = () => {
  return (
    <div className={styles.wrapper} id="services">
      <div className={styles.title}>
        <h2>Малярные работы</h2>
        <p>Наша компания предоставляет качественные штукатурно-молярные работы</p>
      </div>
      <div className={styles.grid}>
        {ITEMS.map((item) => (
          <CardItem
            key={item.title}
            image={IMAGES[item.image as IMGType]}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};
