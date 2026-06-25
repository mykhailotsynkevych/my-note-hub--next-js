const Loading = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_28%),linear-gradient(180deg,#f8fafc_0%,#ffffff_72%)]" />

      <div className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-6xl flex-col px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <div className="h-3 w-24 animate-pulse rounded-full bg-sky-200" />
          <div className="mt-4 h-10 w-64 animate-pulse rounded-xl bg-slate-200" />
          <div className="mt-3 h-4 w-full max-w-xl animate-pulse rounded-full bg-slate-100" />
          <div className="mt-2 h-4 w-3/4 max-w-lg animate-pulse rounded-full bg-slate-100" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="h-6 w-2/3 animate-pulse rounded-lg bg-slate-200" />
                <div className="h-7 w-16 animate-pulse rounded-full bg-amber-100" />
              </div>

              <div className="mt-5 space-y-2">
                <div className="h-4 w-full animate-pulse rounded-full bg-slate-100" />
                <div className="h-4 w-11/12 animate-pulse rounded-full bg-slate-100" />
                <div className="h-4 w-4/5 animate-pulse rounded-full bg-slate-100" />
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="h-3 w-20 animate-pulse rounded-full bg-slate-100" />
                <div className="h-3 w-24 animate-pulse rounded-full bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Loading;