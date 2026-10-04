'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function MeetingSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentQuery = searchParams.get('query') || '';

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    params.delete('page');

    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="mb-6">
      <label htmlFor="meeting-search" className="sr-only">
        Search meetings
      </label>

      <input
        id="meeting-search"
        type="search"
        placeholder="Search meetings..."
        defaultValue={currentQuery}
        onChange={(event) => handleSearch(event.target.value)}
        aria-label="Search meetings"
        className="w-full rounded border border-gray-300 px-4 py-2"
      />
    </div>
  );
}