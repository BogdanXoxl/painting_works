"use client";

import React from "react";

import { scrollTo } from "../../../helpers/scrollTo";
import styles from "./button.module.scss";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children, href }) => {
  return (
    <button className={styles.btn} onClick={() => scrollTo(href)}>
      {children}
    </button>
  );
};
