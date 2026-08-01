import { getCategories } from '@/lib/api';
import NoteForm from '@/components/NoteForm';
import Link from 'next/link';

const CreateNote = async () => {
  const categories = await getCategories();

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.13),transparent_32%),radial-gradient(circle_at_top_right,rgba(250,204,21,0.16),transparent_30%),linear-gradient(180deg,#f8fafc_0%,#ffffff_72%)]" />

      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/notes/filter/all"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-300 hover:text-slate-900"
        >
          <span aria-hidden="true">←</span>
          Back to notes
        </Link>

        <div className="mt-5 rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.45)] backdrop-blur sm:p-8 lg:p-10">
          <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
            New note
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Create a note
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Capture your idea, choose a category, and save it to your notes collection.
          </p>

          <NoteForm categories={categories} />
        </div>
      </div>
    </section>
  );
};

export default CreateNote;