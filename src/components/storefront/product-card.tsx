"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MockProduct } from "../../lib/mock-data/products";

interface ProductCardProps {
  product: MockProduct;
  delay?: number;
}

export function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const soldOut = product.stock <= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        href={`/product/${product.slug}`}
        className="group block overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface"
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
              soldOut ? "opacity-50 grayscale" : ""
            }`}
          />
          {soldOut && (
            <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-text-primary">
              Sold Out
            </span>
          )}
        </div>
        <div className="p-3">
          <p className="text-xs text-text-muted">{product.category}</p>
          <p className="mt-1 text-sm text-text-primary">{product.name}</p>
          <p className="mt-1 text-sm text-accent-amber">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}