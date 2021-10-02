import { createContext, useState } from "react";

export const DarkContext = createContext("Light");

export const DarkProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");

  const handleChange = () => {
    setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));
  };

  return (
    <DarkContext.Provider value={{ theme, handleChange }}>
      {children}
    </DarkContext.Provider>
  );
};
