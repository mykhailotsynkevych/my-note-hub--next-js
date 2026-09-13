'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { deleteNote, getSingleNote } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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

  const createdAt = new Date(note.createdAt).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const updatedAt = new Date(note.updatedAt).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

const handleGoBack = () => {
    router.push('/notes/filter/all');
};

const { mutate: removeNote, isPending: isDeleting } = useMutation({
  mutationFn: () => deleteNote(id),
  onSuccess: () => {
    router.push('/notes/filter/all');
  },
});

const handleDelete = () => {
  const isSure = confirm('Delete this note? This cannot be undone.');
  if (isSure) {
    removeNote();
  }
};

  return (
    <section className="relative isolate flex-1 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(250,204,21,0.14),transparent_28%),linear-gradient(180deg,#f8fafc_0%,#ffffff_72%)]" />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <button
              className="inline-flex w-fit items-center gap-2 rounded-md border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-300 hover:text-slate-900"
              onClick={handleGoBack}
            >
              {' '}
              <span aria-hidden="true">←</span>
              Back to notes
            </button>
            <div className="flex items-center gap-3">
            <Link
              href={`/notes/${id}/edit`}
              className="inline-flex w-fit items-center gap-2 rounded-md bg-[#0d6efd] px-4 py-2 text-md font-medium text-white shadow-sm transition hover:bg-sky-600"
            >
              Edit note
            </Link>
            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="inline-flex w-fit items-center gap-2 rounded-md bg-rose-600 px-4 py-2 text-md font-medium text-white shadow-sm transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isDeleting ? 'Deleting...' : 'Delete note'}
            </button>
            </div>
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex rounded-md bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
              Note details
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {note.title}
            </h1>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="rounded-xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur sm:p-8">
            <div className="flex flex-wrap items-center gap-3 border-b border-slate-100 pb-5">
              <span className="rounded-md bg-slate-100 px-3 py-1 text-md font-semibold text-slate-700">
                ID: {note.id.slice(0, 8)}
              </span>
              <span className="rounded-md bg-amber-100 px-3 py-1 text-md font-semibold text-amber-800">
                Tag: {note.tag}
              </span>
            </div>

            <div className="prose prose-slate mt-6 max-w-none">
              <p className="whitespace-pre-wrap text-base leading-8 text-slate-700 sm:text-lg">
                {note.content}
              </p>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Created
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {createdAt}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Last update
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {updatedAt}
              </p>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
};

export default NoteDetailsClient;
