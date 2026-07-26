"use client";

import { motion } from "framer-motion";

export function BrandStory() {
  return (
    <section
      aria-label="Our story"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, #241c14 0%, #0f0d0b 70%)",
        }}
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-2xl px-5 py-24 text-center lg:px-8"
      >
        <h2 className="font-display text-2xl text-text-primary lg:text-3xl">
          Handcrafted, made in India
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-text-secondary">
          Each piece is created by hand, carrying the story of the artist
          behind it. No two pieces are ever quite the same — and that&apos;s
          the point.
        </p>
      </motion.div>
    </section>
  );
}