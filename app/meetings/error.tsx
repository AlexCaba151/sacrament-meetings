'use client';

import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-[#172033]">
        Something went wrong
      </h1>

      <p className="mt-4 text-slate-600">
        We were unable to complete your request.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="bg-[#172033] px-6 py-3 font-semibold text-white hover:bg-[#294C73]"
        >
          Try Again
        </button>

        <Link
          href="/meetings"
          className="border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-50"
        >
          Back to Meetings
        </Link>
      </div>
    </main>
  );
}