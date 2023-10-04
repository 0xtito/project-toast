import React, { useCallback, useEffect } from "react";

function useClearAll(handler, key) {
  useEffect(() => {
    const checkKeyPressed = (e) => {
      if (e.key === key) handler();
    };

    window.addEventListener("keydown", checkKeyPressed);

    return () => {
      window.removeEventListener("keydown", checkKeyPressed);
    };
  }, []);

  // const clearAll = useCallback((e) => {
  //   if (e.key === key) {
  //     handler(elements);
  //   }
  // }, []);

  // return [clearAll];
}

export default useClearAll;
