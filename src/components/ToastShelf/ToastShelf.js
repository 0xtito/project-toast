import React, { useContext } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToasterContext } from "../ToastProvider/ToastProvider";
import useClearAll from "../../hooks/useClearAll";

function ToastShelf() {
  const {
    activeToasts: toasts,
    handleClose,
    handleCloseAllToasts,
  } = useContext(ToasterContext);

  useClearAll(() => {
    handleCloseAllToasts();
  }, "Escape");

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ variantType, message, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            type={variantType}
            message={message}
            handleClose={handleClose}
            id={id}
          />
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
