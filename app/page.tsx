import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#B08D57]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
              Santo Domingo Ward
            </p>
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#172033] sm:text-5xl lg:text-6xl">
            Sacrament Meeting
            <span className="block text-[#294C73]">
              Planner
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            A centralized application for planning, reviewing,
            and printing sacrament meeting programs for current
            and previous weeks.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/meetings"
              className="inline-flex items-center justify-center bg-[#172033] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#294C73] focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:ring-offset-2"
            >
              View Meeting Programs
            </Link>

            <Link
              href="/meetings/current"
              className="inline-flex items-center justify-center border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#172033] transition hover:border-[#294C73] hover:text-[#294C73] focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:ring-offset-2"
            >
              Current Sunday
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-4 h-24 w-24 border-t border-r border-[#B08D57]" />

          <div className="relative overflow-hidden border border-slate-200 bg-white p-8 shadow-[0_15px_40px_rgba(23,32,51,0.08)]">
            <div className="mb-6 border-b border-slate-200 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
                Meeting Program
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-[#172033]">
                Sunday Worship
              </h2>
            </div>

            <Image
              src="/savior.jpg"
              alt="Illustration of a sacrament meeting program"
              width={800}
              height={600}
              className="h-auto w-full"
              priority
            />

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-200 pt-5 text-center">
              <div>
                <p className="text-lg font-semibold text-[#172033]">
                  Hymns
                </p>
                <p className="text-xs text-slate-500">
                  Worship
                </p>
              </div>

              <div className="border-x border-slate-200">
                <p className="text-lg font-semibold text-[#172033]">
                  Prayers
                </p>
                <p className="text-xs text-slate-500">
                  Meetings
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-[#172033]">
                  Speakers
                </p>
                <p className="text-xs text-slate-500">
                  Messages
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b border-l border-[#B08D57]" />
        </div>
      </div>
    </section>
  );
}