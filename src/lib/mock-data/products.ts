/**
 * Temporary mock product data using placeholder photos.
 * Shape mirrors the future Prisma `Product` model.
 * Replace `image` with real uploaded photo URLs in Phase 4.
 */
export interface MockProduct {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  salePrice?: number;
  stock: number;
  image: string;
}

export const mockProducts: MockProduct[] = [
  {
    id: "prod-mandala-1",
    name: "Handmade Mandala Artwork",
    slug: "handmade-mandala-artwork",
    category: "Mandala Art",
    price: 1499,
    stock: 1,
    image: "https://picsum.photos/seed/mandala1/600/600",
  },
  {
    id: "prod-krishna-1",
    name: "Krishna Devotional Artwork",
    slug: "krishna-devotional-artwork",
    category: "Devotional Art",
    price: 2199,
    stock: 1,
    image: "https://picsum.photos/seed/krishna1/600/600",
  },
  {
    id: "prod-sketch-1",
    name: "Pencil Portrait Sketch",
    slug: "pencil-portrait-sketch",
    category: "Sketches",
    price: 999,
    stock: 0,
    image: "https://picsum.photos/seed/sketch1/600/600",
  },
];