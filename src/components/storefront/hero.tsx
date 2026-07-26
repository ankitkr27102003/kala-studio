"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FloatingCard } from "./floating-card";

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, #3a2a1f 0%, #0f0d0b 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <h1 className="font-display text-4xl leading-tight text-text-primary lg:text-5xl">
            Art that steps off the wall
          </h1>
          <p className="mt-4 text-text-secondary">
            Handmade artwork, custom commissions, and tailoring, made with
            care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="rounded-[var(--radius-button)] bg-accent-amber px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-amber-hover"
            >
              Explore art
            </Link>
            <Link
              href="/custom-art"
              className="rounded-[var(--radius-button)] border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-text-secondary"
            >
              Custom order
            </Link>
          </div>
        </motion.div>

       {/* Tablet & up: single centered card */}
        <div className="relative hidden h-[220px] sm:flex sm:items-center sm:justify-center lg:hidden">
          <FloatingCard
            gradient="linear-gradient(160deg, #d98c4a, #8c3d24)"
            rotate={4}
            delay={0.1}
            size="lg"
          >
            <span className="text-xs text-[#fcebdf]">Krishna artwork</span>
          </FloatingCard>
        </div>

        {/* Desktop: full three-card layered layout */}
        <div className="relative hidden h-[280px] lg:block">
          <div className="absolute right-0 top-0">
            <FloatingCard
              gradient="linear-gradient(160deg, #d98c4a, #8c3d24)"
              rotate={8}
              delay={0.1}
              size="lg"
            >
              <span className="text-xs text-[#fcebdf]">Krishna artwork</span>
            </FloatingCard>
          </div>
          <div className="absolute right-28 top-14">
            <FloatingCard
              gradient="linear-gradient(160deg, #c9a66b, #7a5c2e)"
              rotate={-6}
              delay={0.25}
              size="md"
            >
              <span className="text-xs text-[#fcf3e0]">Mandala artwork</span>
            </FloatingCard>
          </div>
          <div className="absolute right-56 top-28">
            <FloatingCard
              gradient="linear-gradient(160deg, #7c6b95, #3f3557)"
              rotate={10}
              delay={0.4}
              size="sm"
            >
              <span className="text-xs text-[#ede8f5]">Madhubani art</span>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
}