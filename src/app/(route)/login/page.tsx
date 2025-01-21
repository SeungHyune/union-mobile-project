import styles from "./login.module.css";
import LoginForm from "./_components/LoginForm/LoginForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className={styles.loginSection}>
      <article className={styles.titleContainer}>
        <h2>WORLD MISS UNIVERSITY</h2>
        <h3>CAMBODIA 2024</h3>
      </article>
      <div className={styles.imgBox}>
        <Image
          className={styles.tiaraImg}
          src="/images/tiara_crown.png"
          alt="world miss university cambodia 2024 tiara crown"
          fill
          priority
        />
      </div>
      <article className={styles.contentContainer}>
        <span>Cast your vote for the brightest cadidate!</span>
        <span>World Miss University voting starts now!</span>
      </article>
      <LoginForm />

      <div className={styles.imgBox}>
        <Image
          className={styles.spaceImg}
          src="/images/space.png"
          alt="space"
          fill
          priority
        />
      </div>
    </section>
  );
};

export default LoginPage;
