import { AnimatedPage } from "@/shared/components/AnimatedPage";
import Link from "next/link";

export default function Home() {
  return (
    <AnimatedPage>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-6xl text-slate-500 mb-6 dark:text-slate-50">
          Bem-vindo ao meu Portfólio!
        </h1>
        <Link href="/projetos">
          <button className="border-2 rounded-md p-4 text-semibold text-slate-600 dark:text-slate-100">
            Meus Projetos
          </button>
        </Link>
      </main>
    </AnimatedPage>
  );
}
