"use client";

import { mockProducts } from "../../lib/mock-data/products";
import { ProductCard } from "./product-card";

export function FeaturedSection() {
  return (
    <section
      aria-labelledby="featured-heading"
      className="mx-auto max-w-7xl px-5 pb-14 lg:px-8 lg:pb-20"
    >
      <h2
        id="featured-heading"
        className="mb-8 text-xs uppercase tracking-widest text-text-secondary"
      >
        Featured artwork
      </h2>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {mockProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}