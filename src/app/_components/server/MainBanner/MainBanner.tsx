import Image from "next/image";
import styles from "./mainBanner.module.css";

interface MainBannerProps {
  children: React.ReactNode;
}

const MainBanner = ({ children }: MainBannerProps) => {
  return (
    <section className={styles.mainBannerSection}>
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
        <span>Cast your vote for the brightest candidate!</span>
        <span>World Miss University voting starts now!</span>
      </article>
      {children}
    </section>
  );
};

export default MainBanner;
