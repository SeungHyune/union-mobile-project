import { createPortal } from "react-dom";
import styles from "../../modal.module.css";

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  return createPortal(
    <section className={styles.modalContainer}>
      <section className={styles.modalSection}>{children}</section>
    </section>,
    document.body,
  );
};

export default ModalPortal;
