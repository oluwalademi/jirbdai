"use client";

import { useEffect } from "react";

export function useSmoothHashScroll(offset: number = -100) {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    scrollToHash(); // Initial scroll on mount

    window.addEventListener("hashchange", scrollToHash);

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (anchor && anchor.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const hash = anchor.getAttribute("href")!;
        if (hash === window.location.hash) {
          scrollToHash();
        } else {
          history.pushState(null, "", hash);
          scrollToHash();
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
      document.removeEventListener("click", handleClick);
    };
  }, [offset]);
}
