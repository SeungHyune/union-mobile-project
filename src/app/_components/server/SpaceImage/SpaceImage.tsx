import Image from "next/image";
import styles from "./spaceImage.module.css";

const SpaceImage = () => {
  return (
    <div className={styles.imgBox}>
      <Image
        className={styles.spaceImg}
        src="/images/space.png"
        alt="space"
        fill
        priority
      />
    </div>
  );
};

export default SpaceImage;
