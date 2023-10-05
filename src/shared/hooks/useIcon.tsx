"use client";

import TypeScriptIcon from "../icons/typescript";
import ReactIcon from "../icons/react";
import GitIcon from "../icons/git";
import HtmlIcon from "../icons/html";
import CssIcon from "../icons/css";
import PhotoshopIcon from "../icons/photoshop";
import BlenderIcon from "../icons/blender";
import { ReactNode, useState } from "react";

type IconProps = {
  id: number;
  icon: ReactNode;
  title: string;
};

export function useIcons() {
  const [icons, setIcons] = useState<IconProps[]>([
    { id: 1, icon: <TypeScriptIcon />, title: "TypeScript" },
    { id: 2, icon: <ReactIcon />, title: "React" },
    { id: 3, icon: <GitIcon />, title: "Git" },
    { id: 4, icon: <HtmlIcon />, title: "HTML5" },
    { id: 5, icon: <CssIcon />, title: "CSS3" },
    { id: 6, icon: <PhotoshopIcon />, title: "Photoshop" },
    { id: 7, icon: <BlenderIcon />, title: "Blender" },
  ]);
  return { icons };
}
