import SectionTitle from "@/shared/components/Title";
import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Sobre mim",
  description: "Descrição sobre mim, minhas skills e meus objetivos.",
};

export default function AboutLayout({ children }: Props) {
  return (
    <>
      <SectionTitle>
        <h1 className="text-2xl text-[var(--title-primary)] font-bold dark:text-zinc-200">
          About Section
        </h1>
      </SectionTitle>
      <main className="bg-zinc-100 dark:bg-zinc-800 mt-10">{children}</main>
    </>
  );
}
