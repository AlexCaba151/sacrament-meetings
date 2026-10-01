'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    href: '/meetings',
    label: 'All Meetings'
  },
  {
    href: '/meetings/current',
    label: 'Current Sunday'
  }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Meeting navigation"
      className="flex flex-wrap gap-2"
    >
      {links.map((link) => {
        const active =
          pathname === link.href ||
          (link.href === '/meetings' &&
            pathname === '/meetings');

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`border px-4 py-2 text-sm font-medium transition ${
              active
                ? 'border-[#172033] bg-[#172033] text-white'
                : 'border-slate-200 bg-white text-slate-600 hover:border-[#294C73] hover:text-[#294C73]'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}