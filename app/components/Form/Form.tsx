"use client";

import Image from "next/image";
import React from "react";

import styles from "./form.module.scss";
import { BannerImage } from "./img";

export const Form = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div id="form" onSubmit={onSubmit} className={styles.wrapper}>
      <div className={styles.img}>
        <Image src={BannerImage} alt="Сотрудники" placeholder="blur" fill />
      </div>

      <form className={styles.form}>
        <h2 className={styles.title}>Оставьте заявку</h2>
        <label htmlFor="name" className={styles.label}>
          Введите имя: <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Фамилия Имя Отчество"
            className={styles.inp}
          />
        </label>

        <label htmlFor="phone" className={styles.label}>
          Введите телефон: <br />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="+7 (XXX) XXX-XX-XX"
            className={styles.inp}
          />
        </label>

        <input type="submit" value="Отправить" className={styles.btn} />
        <span className={styles.subtext}>Мы свяжемся с Вами!</span>
      </form>
    </div>
  );
};
