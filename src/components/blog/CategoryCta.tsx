import Link from 'next/link';
import { BUSINESS } from '@/lib/site';

const CTAS: Record<
  string,
  { title: string; body: string; href: string; label: string; whatsapp?: string }
> = {
  '/surf-coach': {
    title: 'Ready for your first waves?',
    body: 'Private and group lessons in Bouznika with board and wetsuit included.',
    href: '/surf-coach',
    label: 'See lesson prices',
    whatsapp: `${BUSINESS.whatsappUrl}?text=${encodeURIComponent("Hi! I'd like to book a surf lesson in Bouznika.")}`,
  },
  '/board-repair': {
    title: 'Got a ding that needs work?',
    body: 'Bring the board by in Bouznika — small dings start at 100 dh, and bigger jobs get a clear quote.',
    href: '/board-repair',
    label: 'View repair menu',
    whatsapp: `${BUSINESS.whatsappUrl}?text=${encodeURIComponent("Hi! I'd like a quote for board repair.")}`,
  },
  '/surf-guiding': {
    title: 'Stay and surf in Bouznika',
    body: 'Oceanfront villa hosting with guided sessions, from a weekend to a full week.',
    href: '/surf-guiding',
    label: 'See stay packages',
    whatsapp: `${BUSINESS.whatsappUrl}?text=${encodeURIComponent("Hi! I'd like to know more about surf guiding and the villa.")}`,
  },
};

const DEFAULT_CTA = {
  title: 'Come surf with us in Bouznika',
  body: 'Lessons, guiding, hosting, and board repair — message Mehdi to plan your session.',
  href: '/contact',
  label: 'Get in touch',
  whatsapp: BUSINESS.whatsappUrl,
};

export default function CategoryCta({ servicePath }: { servicePath: string }) {
  const cta = CTAS[servicePath] ?? DEFAULT_CTA;

  return (
    <aside className="mt-12 bg-sandy rounded-2xl p-8 text-center">
      <h2 className="font-display text-2xl md:text-3xl text-primary mb-3">{cta.title}</h2>
      <p className="text-neutral/80 max-w-2xl mx-auto mb-6">{cta.body}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href={cta.href}
          className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all"
        >
          {cta.label}
        </Link>
        {cta.whatsapp ? (
          <a
            href={cta.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold py-3 px-8 rounded-full transition-all"
          >
            WhatsApp Mehdi
          </a>
        ) : null}
      </div>
    </aside>
  );
}
