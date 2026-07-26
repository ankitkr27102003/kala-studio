"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PromoCardProps {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  glow: string;
  accentColor: string;
  delay: number;
}

function PromoCard({
  title,
  description,
  href,
  linkLabel,
  glow,
  accentColor,
  delay,
}: PromoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface p-6"
    >
      <div
        className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full"
        style={{ background: glow }}
        aria-hidden="true"
      />
      <div className="relative">
        <h3 className="text-sm text-text-primary">{title}</h3>
        <p className="mt-1.5 text-xs text-text-secondary">{description}</p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-xs transition-colors"
          style={{ color: accentColor }}
        >
          {linkLabel}
          <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}

export function PromoSection() {
  return (
    <section
      aria-label="Custom services"
      className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 pb-14 lg:grid-cols-2 lg:px-8 lg:pb-20"
    >
      <PromoCard
        title="Commission custom art"
        description="Portraits and mandalas, made just for you"
        href="/custom-art"
        linkLabel="Start a commission"
        glow="radial-gradient(circle, #d98c4a55, transparent 70%)"
        accentColor="var(--accent-amber)"
        delay={0}
      />
      <PromoCard
        title="Custom tailoring"
        description="Blouses and suits, stitched to measure"
        href="/tailoring"
        linkLabel="Explore tailoring"
        glow="radial-gradient(circle, #8c6fbf55, transparent 70%)"
        accentColor="var(--accent-purple)"
        delay={0.1}
      />
    </section>
  );
}