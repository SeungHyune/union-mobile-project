import { PrevButton, LogoutButton } from "./_components/";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <PrevButton />
      <h2>2024 WMU</h2>
      <LogoutButton />
    </header>
  );
};

export default Header;
