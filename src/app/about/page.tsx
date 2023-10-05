"use client";

import { useIcons } from "@/shared/hooks/useIcon";

export default function About() {
  const { icons } = useIcons();
  return (
    <>
      <section className="p-10 max-w-md mx-auto rounded-xl overflow-hidden md:max-w-full text-slate-700 dark:text-[var(--title-primary-dark)]">
        <div className="md:flex gap-10">
          <picture className="md:shrink-0 rounded-md">
            <img
              className="rounded-md"
              src="https://picsum.photos/536/354"
            ></img>
          </picture>
          <article className="flex flex-col justify-between py-5">
            <h2 className="font-semibold text-sm">
              Desenvolvedor Web Front-End Júnior e Artista 2D/3D.
            </h2>
            <h1 className="text-4xl font-bold tracking-widest text-center leading-snug">
              A{" "}
              <span className="relative before:h-1 before:w-full before:absolute before:bottom-0 before:rounded-md before:bg-white before:border-2 before:border-emerald-100 before:shadow before:shadow-emerald-600">
                PADAWAN
              </span>{" "}
              ABOUT TO BECOME{" "}
              <span className="relative before:h-1 before:w-full before:absolute before:bottom-0 before:rounded-md before:bg-white before:border-2 before:border-sky-100 before:shadow before:shadow-blue-600">
                JEDI
              </span>{" "}
              <p className="text-xs font-medium">or a Sith...</p>
            </h1>
            <p className="leading-relaxed text-sm font-medium tracking-wider">
              <span>&#60;p&#62;</span> Olá, me chamo Rafael, sou estudante
              autodidata de programação, ingressei nos estudos no ano de 2021.
              Atualmente estou cursando Ciência da Computação. Meu objetivo é me
              tornar um desenvolvedor WEB profissional. Gosto de aprender coisas
              novas, nas horas vagas, gosto de fazer artes 2D e 3D, jogar e
              ouvir música.
              <span>&#60;/p&#62;</span>
            </p>
          </article>
        </div>
      </section>
      <section className="flex flex-col gap-20 p-10 max-w-md mx-auto text-slate-800 dark:text-[var(--title-primary-dark)] bg-white dark:bg-zinc-700 overflow-hidden md:max-w-full">
        <h1 className="self-center font-semibold text-lg dark:text-zinc-100">
          Skills
        </h1>
        <div className="flex flex-col gap-10 items-center">
          <h2 className="font-medium dark:text-zinc-200">Soft Skills</h2>
          <p className="text-sm tracking-wider">
            Sou uma pessoa resiliente, com princípios éticos, com inteligẽncia
            emocional, flexível, empático, colaborativo, gosto de aprender mais
            e mais, também sou positivo e relativamente criativo.
          </p>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <h2 className="font-medium dark:text-zinc-200">Hard Skills</h2>
          <div className="md:flex items-center text-sm gap-6">
            {icons.map((icon) => {
              return (
                <div
                  key={icon.id}
                  className="flex flex-col items-center justify-between gap-4 md:mb-0 mb-3"
                >
                  <button
                    className="bg-sky-600 dark:bg-[var(--background-color)] p-5 rounded-full flex items-center justify-center"
                    key={icon.id}
                    type="button"
                    title={icon.title}
                  >
                    {icon.icon}
                  </button>
                  <p className="font-semibold">{icon.title}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center font-medium tracking-wider text-sm">
            <p>Inglês: Avançado</p>
            <p>Russo: Básico</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="font-medium dark:text-zinc-200">
            Experiências Profissionais
          </h2>
          <ul>
            <li>
              Laboratório Santa Cruz - Auxiliar de laboratório. Duração: 1 ano e
              5 meses.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="font-medium dark:text-zinc-200">Formação Acadêmica</h2>
          <ul>
            <li>Ensino Médio Completo - Término em 2018.</li>
            <li>
              Curso Técnico - Ténico em Informática - Completo 1200 horas..
            </li>
            <li>Ensino Superior - Ciência da Computação - Cursando.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
