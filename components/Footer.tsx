export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-[#172033]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-8 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-semibold text-white">
            Sacrament Meeting Planner
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Santo Domingo Ward
          </p>
        </div>

        <p className="text-xs text-slate-400">
          WDD 430 · Week 02
        </p>
      </div>
    </footer>
  );
}