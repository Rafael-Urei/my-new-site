import { InstagramIcon, LinkedinIcon } from "lucide-react";

export default function Contacts() {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer">
        <div className="flex flex-col items-center justify-center border-2 rounded-full h-32 w-32 gap-6 text-slate-400">
          <InstagramIcon />
        </div>
        <h2 className="font-semibold text-slate-500 tracking-wide">
          Instagram
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer">
        <div className="flex flex-col items-center justify-center border-2 rounded-full h-32 w-32 gap-6 text-slate-400">
          <LinkedinIcon />
        </div>
        <h2 className="font-semibold text-slate-500 tracking-wide">Linkedin</h2>
      </div>
    </div>
  );
}
