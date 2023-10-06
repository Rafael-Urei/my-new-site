"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function AnimatedPage({ children }: Props) {
  return (
    <motion.div
      initial="initialState"
      animate="animateState"
      exit="exitState"
      variants={{
        initialState: { opacity: 0, x: 25 },
        animateState: { opacity: 1, x: 0 },
        exitState: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
