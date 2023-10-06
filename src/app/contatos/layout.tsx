import { AnimatedPage } from "@/shared/components/AnimatedPage";
import SectionTitle from "@/shared/components/Title";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ContactsLayout({ children }: Props) {
  return (
    <AnimatedPage>
      <SectionTitle>
        <h1 className="text-2xl text-[var(--title-primary)] font-bold dark:text-zinc-200">
          Contacts Section
        </h1>
      </SectionTitle>
      <main className=" dark:bg-zinc-800 flex min-h-screen mt-10 flex-col items-center p-24">
        {children}
      </main>
    </AnimatedPage>
  );
}
