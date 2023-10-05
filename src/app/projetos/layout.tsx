import SectionTitle from "@/shared/components/Title";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ProjectsLayout({ children }: Props) {
  return (
    <>
      <SectionTitle>
        <h1 className="text-2xl text-[var(--title-primary)] font-bold dark:text-zinc-200">
          Projects Section
        </h1>
      </SectionTitle>
      <main className="bg-zinc-100 dark:bg-zinc-800 mt-10">{children}</main>
    </>
  );
}
