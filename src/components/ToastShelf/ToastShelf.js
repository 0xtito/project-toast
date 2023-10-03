import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleClose }) {
  return (
    <ol className={styles.wrapper}>
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

export default ToastShelf;
