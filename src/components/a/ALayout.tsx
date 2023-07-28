import type { ReactNode } from "react";
import LogoLayout from "../LogoLayout";

export default function ALayout({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | ReactNode;
}) {
  return (
    <LogoLayout>
      <div>
        <header className="bg-gradient-to-b from-bluebase/60">
          <h1 className="font-normal pt-9 text-center text-shadow mb-0 pb-5 text-white">
            {title}
          </h1>
        </header>
        <div className="pt-3 pb-32 bg-gradient-to-t from-bgbase via-bgbase/10">
          {children}
        </div>
      </div>
    </LogoLayout>
  );
}
