"use client";

import Link from "next/link";
import "../../app/globals.css";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex w-full items-center justify-center">
      <ul className="flex gap-10 font-semibold text-zinc-600 dark:text-zinc-100">
        <li>
          <Link
            className={
              pathname === "/"
                ? "relative before:absolute before:h-1 before:w-full before:bg-violet-600 before:bottom-[-3px] before:rounded-xl"
                : ""
            }
            href="/"
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/about"
                ? "relative before:absolute before:h-1 before:w-full before:bg-violet-600 before:bottom-[-3px] before:rounded-xl"
                : ""
            }
            href="/about"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/projetos"
                ? "relative before:absolute before:h-1 before:w-full before:bg-violet-600 before:bottom-[-3px] before:rounded-xl"
                : ""
            }
            href="/projetos"
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/contatos"
                ? "relative before:absolute before:h-1 before:w-full before:bg-violet-600 before:bottom-[-3px] before:rounded-xl"
                : ""
            }
            href="/contatos"
          >
            Contatos
          </Link>
        </li>
      </ul>
    </div>
  );
}
