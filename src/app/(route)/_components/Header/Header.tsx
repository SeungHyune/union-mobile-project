import styles from "./header.module.css";

interface HeaderProps {
  containerStyle?: React.CSSProperties;
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  leftSectionStyle?: React.CSSProperties;
  rightSectionStyle?: React.CSSProperties;
  title?: string;
}

const Header = ({
  containerStyle,
  leftChildren = <div className={styles.emptyBlock} />,
  rightChildren = <div className={styles.emptyBlock} />,
  leftSectionStyle,
  rightSectionStyle,
  title = "2024 WMU",
}: HeaderProps) => {
  return (
    <header className={styles.header} style={{ ...containerStyle }}>
      <section style={{ ...leftSectionStyle }}>{leftChildren}</section>
      <h2>{title}</h2>
      <section style={{ ...rightSectionStyle }}>
        {rightChildren || <div className={styles.emptyBlock} />}
      </section>
    </header>
  );
};

export default Header;
