"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FloatingCardProps {
  gradient: string;
  rotate: number;
  delay?: number;
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
  className?: string;
}

const sizeMap = {
  sm: "h-[150px] w-[130px]",
  md: "h-[180px] w-[150px]",
  lg: "h-[210px] w-[170px]",
};

export function FloatingCard({
  gradient,
  rotate,
  delay = 0,
  size = "md",
  children,
  className = "",
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className={`rounded-[var(--radius-card)] shadow-[var(--shadow-float-lg)] flex items-end p-3 ${sizeMap[size]} ${className}`}
      style={{ background: gradient }}
    >
      {children}
    </motion.div>
  );
}