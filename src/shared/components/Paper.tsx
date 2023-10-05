import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Paper({ children }: Props) {
  return (
    <>
      <div className="md:flex rounded-xl shadow-sm p-10 gap-10 my-10 bg-white">
        {children}
      </div>
    </>
  );
}
