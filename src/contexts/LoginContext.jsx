"use client";

import { createContext, useContext, useState } from "react";

export const LoginContext = createContext(null);

export function useLoginContext() {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("useLoginContext must be used within LoginProvider");
  }

  return context;
}

export function LoginProvider({ children }) {
  const [currentUsername, setCurrentUsername] = useState();

  const value = { currentUsername, setCurrentUsername };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
