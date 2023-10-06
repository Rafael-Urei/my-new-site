import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function BottomMenu() {
  return (
    <div className="h-14 w-full sm:hidden flex items-center justify-center bg-violet-500 fixed bottom-0">
      <Link href="#">
        <button
          type="button"
          className="flex items-center justify-center text-zinc-50"
        >
          <HomeIcon />
        </button>
      </Link>
    </div>
  );
}
