import { HamburgerButton } from "../HamburgerButton/HamburgerButton";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Your Store Logo</div>
      <div className={styles.hamburger}>
        <HamburgerButton></HamburgerButton>
      </div>
    </nav>
  );
};
