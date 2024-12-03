import { useState } from "react";

/**
 * Custom hook for managing localStorage or sessionStorage.
 *
 * @param {string} key - The key to store the data under.
 * @param {any} initialValue - The initial value to use if no stored value exists.
 * @param {string} type - The storage type: 'local' for localStorage or 'session' for sessionStorage.
 * @returns {[any, function, function]} - Returns the stored value, a setter, and a remover.
 */
function useStorage(key, initialValue, type = "local") {
  const storage = type === "local" ? localStorage : sessionStorage;

  const getStoredValue = () => {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error accessing storage:", error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getStoredValue);

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      storage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting storage value:", error);
    }
  };

  const removeValue = () => {
    try {
      storage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error("Error removing storage value:", error);
    }
  };

  return [storedValue, setValue, removeValue];
}

export default useStorage;
