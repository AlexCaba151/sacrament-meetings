import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-[#172033]">
        Meeting not found
      </h1>

      <p className="mt-4 text-slate-600">
        The meeting you are looking for does not exist.
      </p>

      <Link
        href="/meetings"
        className="mt-8 inline-block bg-[#172033] px-6 py-3 font-semibold text-white hover:bg-[#294C73]"
      >
        Back to Meetings
      </Link>
    </main>
  );
}