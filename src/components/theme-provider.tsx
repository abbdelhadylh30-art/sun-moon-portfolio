"use client";

import { createContext, useContext, useEffect, useState } from "react";

type View = "sun" | "moon";

const ThemeContext = createContext<{
  view: View;
  setView: (v: View) => void;
}>({ view: "sun", setView: () => {} });

export function useView() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [view, setViewState] = useState<View>("sun");

  useEffect(() => {
    const stored = localStorage.getItem("view") as View | null;
    if (stored === "sun" || stored === "moon") {
      setViewState(stored);
      document.documentElement.dataset.view = stored;
    } else {
      document.documentElement.dataset.view = "sun";
    }
  }, []);

  const setView = (v: View) => {
    setViewState(v);
    document.documentElement.dataset.view = v;
    localStorage.setItem("view", v);
  };

  return (
    <ThemeContext.Provider value={{ view, setView }}>
      {children}
    </ThemeContext.Provider>
  );
}
