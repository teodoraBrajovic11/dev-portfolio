import { type ReactNode, useEffect, useState } from "react";
import { SidebarContext } from "./sidebarContext";

type SidebarProviderProps = {
  children: ReactNode;
};

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  function isScreenSmall() {
    return window.innerWidth < 1024;
  }

  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsSmallOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  function toggle() {
    if (isScreenSmall()) setIsSmallOpen((s) => !s);
    else setIsLargeOpen((l) => !l);
  }

  function close() {
    if (isScreenSmall()) setIsSmallOpen(false);
    else setIsLargeOpen(false);
  }

  return (
    <SidebarContext.Provider
      value={{ isLargeOpen, isSmallOpen, toggle, close }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
