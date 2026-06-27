'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getSingleNote } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const {
    data: note,
    // isLoading,
    // error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  if (!note) {
    notFound();
  }

  const createdAt = new Date(note.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const updatedAt = new Date(note.updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const handleGoBack = () => {
  const isSure = confirm('Are you sure?');
  if (isSure) {
    router.back();
  }
};

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(250,204,21,0.14),transparent_28%),linear-gradient(180deg,#f8fafc_0%,#ffffff_72%)]" />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <button
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-300 hover:text-slate-900"
            onClick={handleGoBack}
          >
            {' '}
            <span aria-hidden="true">←</span>
            Back to notes
          </button>

          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
              Note details
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {note.title}
            </h1>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur sm:p-8">
            <div className="flex flex-wrap items-center gap-3 border-b border-slate-100 pb-5">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                ID: {note.id.slice(0, 8)}
              </span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                Category: {note.categoryId}
              </span>
            </div>

            <div className="prose prose-slate mt-6 max-w-none">
              <p className="whitespace-pre-wrap text-base leading-8 text-slate-700 sm:text-lg">
                {note.content}
              </p>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Created
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {createdAt}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Last update
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {updatedAt}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-5 text-slate-50 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Owner
              </p>
              <p className="mt-2 break-all text-sm leading-6 text-slate-200">
                {note.userId}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default NoteDetailsClient;
