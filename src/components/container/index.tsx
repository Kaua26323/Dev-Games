import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <main className="w-full max-w-screen-xl mx-auto px-5 text-white">
      {children}
    </main>
  );
}
