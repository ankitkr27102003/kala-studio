"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { mainNav } from "../../lib/config/nav";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed right-0 top-0 z-50 h-full w-72 border-l border-border bg-surface p-6 lg:hidden"
          >
            <div className="mb-8 flex justify-end">
              <button
                aria-label="Close menu"
                onClick={onClose}
                className="text-text-secondary hover:text-text-primary"
              >
                <X size={20} />
              </button>
            </div>
            <nav
              aria-label="Mobile navigation links"
              className="flex flex-col gap-6"
            >
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="font-display text-lg text-text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}