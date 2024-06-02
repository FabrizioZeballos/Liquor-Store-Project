import { useState } from "react";
import "./HamburgerButton.module.css";
import styles from "./HamburgerButton.module.css";

export const HamburgerButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button
      className={`${styles.hamburger} ${isMenuOpen && styles.open}`}
      onClick={toggleMenu}
    >
      <span className={`${styles.bar} ${styles["bar-top"]}`}></span>
      <span className={`${styles.bar} ${styles["bar-middle"]}`}></span>
      <span className={`${styles.bar} ${styles["bar-bottom"]}`}></span>
    </button>
  );
};
