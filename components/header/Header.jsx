"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

const languages = [
  { code: "EN", label: "ENG" },
  { code: "FR", label: "FRA" },
  { code: "ES", label: "SPA" },
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.leftSection}>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
          <Image
            className={styles.logoIcon}
            src="/images/logo.svg"
            width={100}
            height={100}
            alt="Logo Icon"
          />
        </div>

        <div className={styles.logo}>LOGO</div>

        <div className={styles.rightIcons}>
          <Image
            className={styles.icon}
            src="/images/search-icon.svg"
            width={100}
            height={100}
            alt="Search"
          />
          <Image
            className={styles.icon}
            src="/images/heart.svg"
            width={100}
            height={100}
            alt="Heart"
          />
          <Image
            className={styles.icon}
            src="/images/shopping-bag.svg"
            width={100}
            height={100}
            alt="Shopping bag"
          />
          <Image
            className={`${styles.icon} ${styles.webdesign}`}
            src="/images/profile.svg"
            width={100}
            height={100}
            alt="Profile"
          />
          <div className={`${styles.wrapper} ${styles.webdesign}`}>
            <select
              className={styles.select}
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.show : ""}`}>
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
    </header>
  );
}
