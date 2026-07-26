import Link from "next/link";
import { siteConfig } from "../../lib/config/site";
import { footerNav } from "../../lib/config/footer-nav";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-xs uppercase tracking-widest text-text-muted">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div className="col-span-2 lg:col-span-1">
          <p className="font-display text-lg text-text-primary">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            {siteConfig.description}
          </p>
        </div>

        <FooterColumn title="Shop" links={footerNav.shop} />
        <FooterColumn title="Company" links={footerNav.company} />
        <FooterColumn title="Policies" links={footerNav.policies} />
      </div>

      <div className="border-t border-border px-5 py-5 text-center text-xs text-text-muted lg:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}