import React, { useEffect, useState, useRef } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variantType, setVariantType] = useState("notice");
  const [activeToasts, setActiveToasts] = useState([]);

  const handleClose = (clickedId) => {
    setActiveToasts((currentActiveToasts) => {
      return currentActiveToasts.filter(({ id, ...rest }) => id !== clickedId);
    });
  };

  const handlePopToast = (e) => {
    e.preventDefault();

    setActiveToasts((currentActiveToasts) => [
      ...currentActiveToasts,
      {
        variantType,
        message,
        id: crypto.randomUUID(),
      },
    ]);
  };

  // useEffect(() => {
  //   let timer;

  //   if (displayToast) {
  //     timer = setTimeout(() => {
  //       setDisplayToast(false);
  //     }, 2000);
  //   }

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [displayToast]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {activeToasts.length > 0 && (
        // <Toast type={variantType} message={message} handleClose={handleClose} />
        <ToastShelf toasts={activeToasts} handleClose={handleClose} />
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) =>
                setMessage(e.target.value) && e.target.parentElement.id
              }
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((type) => (
              <label htmlFor={`variant-${type}`} key={type}>
                <input
                  id={`variant-${type}`}
                  type="radio"
                  name={type}
                  value={type}
                  checked={variantType === type}
                  onChange={(e) => setVariantType(e.target.value)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={handlePopToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
