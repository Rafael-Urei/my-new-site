import Paper from "@/shared/components/Paper";
import projects from "../../../db/hard-skills";
import { GithubIcon, Link2Icon } from "lucide-react";

export default function Projects() {
  return (
    <>
      <div className="">
        {projects.map((project) => {
          return (
            <Paper>
              <img
                src="https://picsum.photos/536/354"
                className="rounded-xl"
              ></img>
              <div className="md:flex md:flex-col md:gap-4 flex flex-col gap-6 md:mt-4 mt-6 text-slate-500 dark:text-slate-200">
                <h1 className="font-semibold text-slate-700 dark:text-slate-200 text-2xl">
                  {project.title}
                </h1>
                <p className="text-slate-500 dark:text-slate-200 font-medium text-sm tracking-wide">
                  {project.description}
                </p>
                <p className="font-semibold tracking-wider text-sm">
                  <span className="font-normal">Ferramentas utilizadas:</span>{" "}
                  {project.tools}
                </p>
                <div className="flex gap-6">
                  <button className="flex h-9 rounded-md bg-white border-2 border-slate-300 p-5 items-center justify-center gap-4 font-medium md:text-base text-sm duration-300 hover:bg-slate-100">
                    <GithubIcon className="text-slate-300" />
                    Visualizar o código
                  </button>
                  {project.siteUrl !== "" && (
                    <button className="flex h-9 rounded-md bg-white border-2 border-slate-300 p-5 items-center justify-center gap-4 font-medium duration-300 hover:bg-slate-100">
                      <Link2Icon className="text-slate-300" />
                      Site
                    </button>
                  )}
                </div>
              </div>
            </Paper>
          );
        })}
      </div>
    </>
  );
}
