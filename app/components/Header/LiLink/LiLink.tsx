"use client";

import React from "react";

import { scrollTo } from "../../../helpers/scrollTo";
import styles from "./lilink.module.scss";

type Props = {
  href: string;
  title: string;
};

export const LiLink = ({ title, href }: Props) => {
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <li key={href} onClick={onClick} className={styles.link}>
      <a href={`#${href}`}>{title}</a>
    </li>
  );
};
