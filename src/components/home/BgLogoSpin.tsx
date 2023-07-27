import Image from "next/image";
import correlaSVG from "./correla.svg";
import "./bglogo.css";

export default function BgLogoSpin() {
  return (
    <div
      id="bg-spin"
      className="animate-spin-slow blur-[1px] will-change-transform"
    >
      <Image alt="Correla logo" src={correlaSVG} id="bg-logo" />
    </div>
  );
}
