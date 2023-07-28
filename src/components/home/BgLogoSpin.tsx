import CorrelaLogoIcon from "../icons/CorrelaLogoIcon";
import BgSpin from "./BgSpin";
import "./bglogo.css";

export default function BgLogoSpin() {
  // animate-spin-slow
  return (
    <div id="bg-spin" className="blur-[1px] will-change-transform">
      <CorrelaLogoIcon big />
      <BgSpin />
    </div>
  );
}
