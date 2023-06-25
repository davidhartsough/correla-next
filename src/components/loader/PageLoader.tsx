import { Loader2 } from "lucide-react";
import CorrelaLogoIcon from "../icons/CorrelaLogoIcon";

export default function PageLoader() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <Loader2 className="absolute bottom-0 left-0 right-0 top-0 z-0 h-16 w-16 animate-spin-med" />
        <div className="relative z-10">
          <CorrelaLogoIcon />
        </div>
      </div>
    </div>
  );
}
