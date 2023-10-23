import { InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Link
        className="m-10"
        href="https://www.linkedin.com/in/rafael-souza-390513275/"
        target="_blank"
      >
        <div className="flex flex-col items-center justify-center bg-slate-200 h-32 w-32 rounded-full duration-300 hover:bg-sky-300 hover:text-slate-50 font-semibold gap-3">
          <LinkedinIcon />
          <h2>Linkedin</h2>
        </div>
      </Link>
      <Link
        className="m-10"
        href="https://www.instagram.com/rafaelss.exe/?hl=en"
        target="_blank"
      >
        <div className="flex flex-col items-center justify-center bg-slate-200 h-32 w-32 rounded-full duration-300 hover:bg-pink-300 hover:text-slate-50 font-semibold gap-3">
          <InstagramIcon />
          <h2>Instagram</h2>
        </div>
      </Link>
    </>
  );
}
