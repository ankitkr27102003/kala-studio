/**
 * Temporary mock category data.
 * Shape mirrors the future Prisma `Category` model so swapping to
 * real database queries later (Phase 4) requires minimal changes.
 */
export interface MockCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export const mockCategories: MockCategory[] = [
  {
    id: "cat-mandala",
    name: "Mandala Art",
    slug: "mandala",
    image: "https://picsum.photos/seed/cat-mandala/400/300",
  },
  {
    id: "cat-sketches",
    name: "Sketches",
    slug: "sketches",
    image: "https://picsum.photos/seed/cat-sketches/400/300",
  },
  {
    id: "cat-devotional",
    name: "Devotional Art",
    slug: "devotional",
    image: "https://picsum.photos/seed/cat-devotional/400/300",
  },
  {
    id: "cat-paintings",
    name: "Paintings",
    slug: "paintings",
    image: "https://picsum.photos/seed/cat-paintings/400/300",
  },
];