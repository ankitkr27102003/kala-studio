"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { mockCategories } from "../../lib/mock-data/categories";

export function CategorySection() {
  return (
    <section
      aria-labelledby="category-heading"
      className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20"
    >
      <h2
        id="category-heading"
        className="mb-8 text-xs uppercase tracking-widest text-text-secondary"
      >
        Shop by category
      </h2>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {mockCategories.map((category, i) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              href={`/art/${category.slug}`}
              className="group block overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface"
            >
              <div className="relative h-28 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 text-center">
                <span className="text-sm text-text-primary">
                  {category.name}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}