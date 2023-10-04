import React, { createContext, useState, useCallback, useMemo } from "react";

export const ToasterContext = createContext();

export function ToastProvider({ children }) {
  const [activeToasts, setActiveToasts] = useState([]);

  const handleClose = useCallback((clickedId) => {
    setActiveToasts((currentActiveToasts) => {
      return currentActiveToasts.filter(({ id }) => id !== clickedId);
    });
  }, []);

  const handlePopToast = useCallback((variantType, message) => {
    setActiveToasts((currentActiveToasts) => [
      ...currentActiveToasts,
      {
        variantType,
        message,
        id: crypto.randomUUID(),
      },
    ]);
  }, []);

  const handleCloseAllToasts = useCallback(() => {
    setActiveToasts([]);
  }, []);

  const memoState = useMemo(() => {
    return {
      activeToasts,
      setActiveToasts,
      handleClose,
      handlePopToast,
      handleCloseAllToasts,
    };
  }, [activeToasts]);

  return (
    <ToasterContext.Provider value={memoState}>
      {children}
    </ToasterContext.Provider>
  );
}

export default ToastProvider;
