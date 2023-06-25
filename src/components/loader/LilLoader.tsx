import { Loader2 } from "lucide-react";

export default function LilLoader({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center justify-center">
      <Loader2 width={size} height={size} className="animate-spin-med" />
    </div>
  );
}
