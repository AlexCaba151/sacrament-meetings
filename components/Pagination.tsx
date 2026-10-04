'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({
  totalPages,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const query = searchParams.get('query') || '';

  if (totalPages <= 1) {
    return null;
  }

  const createUrl = (page: number) => {
    const params = new URLSearchParams();

    if (query) {
      params.set('query', query);
    }

    params.set('page', String(page));

    return `${pathname}?${params.toString()}`;
  };

  return (
    <nav
      aria-label="Meeting pagination"
      className="mt-8 flex items-center justify-center gap-4"
    >
      {currentPage > 1 ? (
        <Link
          href={createUrl(currentPage - 1)}
          className="rounded border px-4 py-2 hover:bg-gray-100"
        >
          Previous
        </Link>
      ) : (
        <span className="rounded border px-4 py-2 text-gray-400">
          Previous
        </span>
      )}

      <span className="font-medium">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={createUrl(currentPage + 1)}
          className="rounded border px-4 py-2 hover:bg-gray-100"
        >
          Next
        </Link>
      ) : (
        <span className="rounded border px-4 py-2 text-gray-400">
          Next
        </span>
      )}
    </nav>
  );
}