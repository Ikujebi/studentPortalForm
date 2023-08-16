import { useCallback } from "react"

const useSetField = (setfield) => {
  const setRequest = useCallback(
    (key, value) => {
      setfield((prev) => {
        return {
          ...prev,
          [key]: value,
        };
      });
    },
    []
  );

  return { setRequest };
};

export default useSetField;
