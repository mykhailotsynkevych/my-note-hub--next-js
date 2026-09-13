'use client';

import Link from 'next/link';
import { useAuthStore } from '@/lib/stores/authStore';

const Home = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <main className="min-h-[calc(100vh-88px)] overflow-hidden bg-[radial-gradient(circle_at_top_left,#e0f2fe_0,#ffffff_34%,#f8fafc_100%)]">
      <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div>
          <span className="inline-flex rounded-md border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
            Personal notes workspace
          </span>

          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl">
            Keep your ideas clear, quick, and easy to find.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            NoteHub helps you collect thoughts, sort them by tag, and return to the right note without digging through noise.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {isAuthenticated ? (
              <>
                <Link
                  href="/notes/filter/all"
                  className="rounded-md bg-[#0d6efd] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Open notes
                </Link>
                <Link
                  href="/profile"
                  className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
                >
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/sign-up"
                  className="rounded-md bg-[#0d6efd] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Get started
                </Link>
                <Link
                  href="/sign-in"
                  className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
                >
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="relative min-h-107.5">
          <div className="absolute inset-0 rounded-2xl bg-[#0d6efd] opacity-90 shadow-xl shadow-sky-900/20" />
          <div className="absolute -right-6 top-8 h-28 w-28 rounded-full bg-white/25 blur-xl" />
          <div className="absolute bottom-8 left-8 right-8 top-8 rounded-xl border border-white/40 bg-white/85 p-5 shadow-xl backdrop-blur">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">Today</p>
                <h2 className="mt-1 text-2xl font-black text-slate-950">Notes board</h2>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">12 saved</span>
            </div>

            <div className="mt-5 space-y-4">
              <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold text-slate-900">Project ideas</h3>
                  <span className="rounded-sm bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">Work</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500">Landing copy, feature list, next release thoughts.</p>
              </article>

              <article className="ml-8 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold text-slate-900">Reading list</h3>
                  <span className="rounded-sm bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">Study</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500">Articles, docs, and questions to revisit later.</p>
              </article>

              <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold text-slate-900">Daily plans</h3>
                  <span className="rounded-sm bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700">Life</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500">Small tasks, quick wins, and things not to forget.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
