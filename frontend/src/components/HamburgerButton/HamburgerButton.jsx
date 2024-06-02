import { useState } from "react";
import "./HamburgerButton.module.css";
import styles from "./HamburgerButton.module.css";
import { Menu } from "../Menu/Menu";

export const HamburgerButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button className={`${styles.hamburger}`} onClick={toggleMenu}>
        <span className={`${styles.bar} ${styles["bar-top"]}`}></span>
        <span className={`${styles.bar} ${styles["bar-middle"]}`}></span>
        <span className={`${styles.bar} ${styles["bar-bottom"]}`}></span>
      </button>
      <div className={styles["menu-container"]}>
        {isMenuOpen && <Menu></Menu>}
      </div>
    </div>
  );
};
