import { ModalPortal } from "./components";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return <ModalPortal>{children}</ModalPortal>;
};

export default Modal;
