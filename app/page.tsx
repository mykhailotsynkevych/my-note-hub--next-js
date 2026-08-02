

import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.2),transparent_32%),linear-gradient(180deg,#f8fafc_0%,#ffffff_74%)]" />

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10 lg:px-8 lg:py-16">
        <div className="space-y-8">
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
              Personal workspace
            </span>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Keep your ideas tidy, searchable, and always ready.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              NoteHub helps you capture quick thoughts, organize them by category,
              and return to what matters without noise.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/notes/filter/all"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Open notes
            </Link>
            <Link
              href="/notes/action/create"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:text-slate-900"
            >
              Create note
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Focused writing
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Capture notes in a clean editor and keep your draft safe while you work.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Smart categories
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Browse by topic from the sidebar and find the right thought in seconds.
              </p>
            </article>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_80px_-44px_rgba(15,23,42,0.45)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Quick start
            </p>
            <ol className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="rounded-2xl bg-slate-50 px-3 py-2">1. Open your notes list</li>
              <li className="rounded-2xl bg-slate-50 px-3 py-2">2. Create a new note</li>
              <li className="rounded-2xl bg-slate-50 px-3 py-2">3. Organize by category</li>
            </ol>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-slate-50 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Tip
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              Use categories as folders for themes like work, study, and personal ideas.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
