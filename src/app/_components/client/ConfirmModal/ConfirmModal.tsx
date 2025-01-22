import Modal from "../Modal/Modal";
import styles from "./confirmModal.module.css";

interface ConfirmModalProps {
  isToggle: boolean;
  title: string;
  content: string;
  completeText: string;
  handleCloseModal: () => void;
}

const ConfirmModal = ({
  isToggle,
  title,
  content,
  completeText,
  handleCloseModal,
}: ConfirmModalProps) => {
  return (
    <>
      {isToggle && (
        <Modal>
          <div className={styles.confirmModal}>
            <div className={styles.contentBox}>
              <strong>{title}</strong>
              <p>{content}</p>
            </div>
            <button type="button" onClick={handleCloseModal}>
              {completeText}
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ConfirmModal;
