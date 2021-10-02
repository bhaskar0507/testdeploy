import { createContext, useState } from "react";

export const DarkMode = createContext("Light");

export const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");

  const handlethemechange = () => {
    setTheme((prev) => (prev === "light" ? "Dark" : "light"));
  };

  return (
    <DarkMode.Provider value={{ theme, handlethemechange }}>
      {children}
    </DarkMode.Provider>
  );
};
