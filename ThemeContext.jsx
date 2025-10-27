import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create the context
const ThemeContext = createContext();

// 2️⃣ Provider component
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3️⃣ Hook to use the context
export const useTheme = () => useContext(ThemeContext);
