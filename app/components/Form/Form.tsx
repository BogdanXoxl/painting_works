"use client";

import parsePhoneNumber from "libphonenumber-js";
import Image from "next/image";
import React, { useState } from "react";

import styles from "./form.module.scss";
import { BannerImage } from "./img";

const normalizePhoneNumber = (value: string) => {
  const phoneNumber = parsePhoneNumber(value, "RU");
  if (phoneNumber) return phoneNumber.formatNational();
  return value;
};

const namePattern = /(^[А-ЯЁ]?[а-яё]+$)/;

export const Form = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const phoneNumber = parsePhoneNumber(phone, "RU");

    if (!namePattern.test(name)) {
      setError("Неверный формат имени!");
      return;
    }

    if (!(phoneNumber && phoneNumber.country === "RU" && phoneNumber.isValid())) {
      setError("Неверный формат телефона!");
      return;
    }

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone }),
    }).then((res) => {
      if (res.status === 200) {
        setName("");
        setPhone("");
        setError("Заявка успешно отправлена!");
      } else {
        setError("Что-то пошло не так!");
      }
    });
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            className={styles.inp}
          />
        </label>

        <label htmlFor="phone" className={styles.label}>
          Введите телефон: <br />
          <input
            value={phone}
            onChange={(e) => setPhone(normalizePhoneNumber(e.target.value))}
            type="text"
            id="phone"
            name="phone"
            placeholder="8 (XXX) XXX-XX-XX"
            className={styles.inp}
          />
        </label>

        <input type="submit" value="Отправить" className={styles.btn} />
        {error ? (
          <span className={styles.error}>{error}</span>
        ) : (
          <span className={styles.subtext}>Мы свяжемся с Вами!</span>
        )}
      </form>
    </div>
  );
};
