import NavLinks from '@/components/NavLinks';

export default function MeetingsLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
              Administration
            </p>

            <h2 className="mt-1 text-lg font-semibold text-[#172033]">
              Meeting Programs
            </h2>
          </div>

          <NavLinks />
        </div>
      </div>

      {children}
    </section>
  );
}