"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

import { Button } from "../Button";
import styles from "./cardItem.module.scss";

type Props = {
  image: StaticImageData;
  title: string;
  text: string;
};

export const CardItem: React.FC<Props> = ({ image, title, text }) => {
  return (
    <div className={styles.item}>
      <Image
        src={image}
        alt="Услуги"
        className={styles.img}
        width={320}
        height={161}
        placeholder="blur"
      />
      <div className={styles.item_content}>
        <h3 className={styles.item_title}>{title}</h3>
        <p className={styles.item_text}>{text}</p>
        <Button href="form">Оставить заявку</Button>
      </div>
    </div>
  );
};
