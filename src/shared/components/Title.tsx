import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return <div className="flex justify-center">{children}</div>;
}
