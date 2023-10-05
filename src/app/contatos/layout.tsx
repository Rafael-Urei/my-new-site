import SectionTitle from "@/shared/components/Title";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ContactsLayout({ children }: Props) {
  return (
    <>
      <SectionTitle>
        <h1 className="text-2xl text-[var(--title-primary)] font-bold dark:text-zinc-200">
          Contacts Section
        </h1>
      </SectionTitle>
      <main className=" dark:bg-zinc-800 mt-10 flex h-screen justify-center">
        {children}
      </main>
    </>
  );
}
