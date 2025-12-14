"use client";

import { createContext, useState, useContext } from "react";

const PreviewContext = createContext(null);

export function PreviewProvider({ children }) {
  const [content, setContent] = useState("");

  return (
    <PreviewContext.Provider value={{ content, setContent }}>
      {children}
    </PreviewContext.Provider>
  );
}

export function usePreview() {
  return useContext(PreviewContext);
}
