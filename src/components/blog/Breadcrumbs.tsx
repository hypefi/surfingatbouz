import Link from 'next/link';

export interface Crumb {
  href?: string;
  label: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-neutral/70 mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {item.href && !last ? (
                <Link href={item.href} className="hover:text-secondary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? 'text-neutral font-medium' : ''}>{item.label}</span>
              )}
              {!last ? <span className="text-neutral/40">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
