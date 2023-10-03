import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ type, message, handleClose, id }) {
  const Icon = ICONS_BY_VARIANT[type];

  console.info(`render for ${type} with msg: ${message}`);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <VisuallyHidden>{type}</VisuallyHidden>
      <button
        className={styles.closeButton}
        onClick={() => handleClose(id)}
        id={id}
        aria-label={message}
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
