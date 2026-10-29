"use client";

import type { ReactNode } from "react";

export function MobileMenu({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <details
      className={className}
      onClick={(event) => {
        if (event.target instanceof Element && event.target.closest("a")) event.currentTarget.open = false;
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.currentTarget.open = false;
          event.currentTarget.querySelector("summary")?.focus();
        }
      }}
    >
      {children}
    </details>
  );
}
