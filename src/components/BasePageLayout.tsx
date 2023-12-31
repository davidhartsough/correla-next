import type { ReactNode } from "react";

export default function BasePageLayout({
  title,
  children,
  centered = false,
}: {
  title: string;
  children: JSX.Element | ReactNode;
  centered?: boolean;
}) {
  return (
    <main>
      <header>
        <h1 className={centered ? "text-center" : ""}>{title}</h1>
      </header>
      <section>{children}</section>
    </main>
  );
}
