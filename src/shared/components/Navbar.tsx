import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Navbar({ children }: Props) {
  return (
    <div className="flex w-full items-center justify-center">{children}</div>
  );
}
