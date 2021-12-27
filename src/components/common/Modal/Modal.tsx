import * as React from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as CloseIcone } from "../../../icons/icons8-отмена.svg";

const modalRoot = document.getElementById("modal-root") as HTMLElement;

type Props = {
  children?: JSX.Element | JSX.Element[];
  closeModal(): void;
};

const Modal = ({ children, closeModal }: Props) => {
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", (e) => handleKeyDown(e));

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.content}>
        {children}
        <div className={styles.closeBtn}>
          <IconButton onClick={closeModal}>
            <CloseIcone />
          </IconButton>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
