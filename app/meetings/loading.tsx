export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <div className="h-3 w-32 animate-pulse bg-slate-200" />

        <div className="mt-4 h-10 w-64 animate-pulse bg-slate-200" />

        <div className="mt-3 h-5 w-full max-w-xl animate-pulse bg-slate-100" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="border border-slate-200 bg-white p-6"
          >
            <div className="h-4 w-32 animate-pulse bg-slate-200" />

            <div className="mt-4 h-7 w-48 animate-pulse bg-slate-200" />

            <div className="mt-8 space-y-4">
              <div className="h-4 w-full animate-pulse bg-slate-100" />
              <div className="h-4 w-4/5 animate-pulse bg-slate-100" />
              <div className="h-4 w-3/5 animate-pulse bg-slate-100" />
            </div>

            <div className="mt-8 h-11 w-full animate-pulse bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  );
}