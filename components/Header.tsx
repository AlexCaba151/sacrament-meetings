export default function Header() {
  const today = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full'
  }).format(new Date());

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="h-1 bg-[#B08D57]" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#172033] text-lg font-bold text-white">
            SD
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
              Ward Administration
            </p>

            <h1 className="mt-1 text-xl font-semibold tracking-tight text-[#172033]">
              Santo Domingo Ward
            </h1>
          </div>
        </div>

        <div className="hidden text-right sm:block">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Today
          </p>

          <p className="mt-1 text-sm font-medium text-slate-600">
            {today}
          </p>
        </div>
      </div>
    </header>
  );
}