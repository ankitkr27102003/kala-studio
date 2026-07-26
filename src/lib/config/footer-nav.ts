/**
 * Central footer navigation config, grouped into columns.
 */
export const footerNav = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Art", href: "/art" },
    { label: "Custom Art", href: "/custom-art" },
    { label: "Tailoring", href: "/tailoring" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  policies: [
    { label: "Shipping Policy", href: "/policies/shipping" },
    { label: "Returns", href: "/policies/returns" },
    { label: "Privacy Policy", href: "/policies/privacy" },
  ],
} as const;