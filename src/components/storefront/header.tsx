"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Heart, User, ShoppingBag, Menu } from "lucide-react";
import { siteConfig } from "../../lib/config/site";
import { mainNav } from "../../lib/config/nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-text-primary"
        >
          {siteConfig.name}
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            aria-label="Search"
            className="hidden text-text-secondary transition-colors hover:text-text-primary lg:block"
          >
            <Search size={18} />
          </button>
          <Link
            href="/account/wishlist"
            aria-label="Wishlist"
            className="hidden text-text-secondary transition-colors hover:text-text-primary lg:block"
          >
            <Heart size={18} />
          </Link>
          <Link
            href="/account"
            aria-label="Account"
            className="hidden text-text-secondary transition-colors hover:text-text-primary lg:block"
          >
            <User size={18} />
          </Link>
         

          <Link
            href="/cart"
            aria-label="Cart"
            className="-m-2.5 p-2.5 text-text-secondary transition-colors hover:text-text-primary"
          >
            <ShoppingBag size={18} />
          </Link>

          <button
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="-m-2.5 p-2.5 text-text-secondary transition-colors hover:text-text-primary lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}