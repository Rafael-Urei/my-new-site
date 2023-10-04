import Navbar from "@/shared/components/Navbar";
import SectionTitle from "@/shared/components/Title";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AboutLayout({ children }: Props) {
  return (
    <>
      <header className="flex items-center justify-center h-14 shadow-md mb-10 dark:bg-zinc-800">
        <Navbar>
          <ul className="flex gap-10 font-semibold text-zinc-600 dark:text-zinc-100">
            <li>
              <Link href="#" target="_parent">
                Início
              </Link>
            </li>
            <li>
              <Link href="#" target="_parent">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#" target="_parent">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="#" target="_parent">
                Contatos
              </Link>
            </li>
          </ul>
        </Navbar>
      </header>
      <SectionTitle>
        <h1 className="text-2xl text-[var(--title-primary)] font-bold dark:text-zinc-200">
          About Section
        </h1>
      </SectionTitle>
      <main className="bg-zinc-100 dark:bg-zinc-800 mt-10">{children}</main>
    </>
  );
}
