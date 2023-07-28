import type { ReactNode } from "react";
import BgLogoSpin from "./home/BgLogoSpin";

export default function LogoLayout({
  children,
}: {
  children: JSX.Element | ReactNode;
}) {
  return (
    <main className="max-w-none p-0">
      <section className="relative">
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 overflow-hidden bg-bluebase">
          <div className="mx-auto mt-8 flex items-center justify-center rounded-full text-center opacity-70">
            <BgLogoSpin />
          </div>
        </div>
        <div className="relative z-10 bg-gradient-to-t from-bgbase via-bgbase/30 to-bluebase/70">
          {children}
        </div>
      </section>
    </main>
  );
}
