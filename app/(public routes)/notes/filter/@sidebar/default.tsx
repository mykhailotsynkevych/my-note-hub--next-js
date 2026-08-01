import Link from 'next/link';
import { getCategories, getNotes } from '@/lib/api';
import CategoriesSidebarClient from './CategoriesSidebarClient';

const NotesSidebar = async () => {
  const categories = await getCategories();
  const allNotesResponse = await getNotes();
  const allNotesCount = allNotesResponse.total;
  const categoryCountEntries = await Promise.all(
    categories.map(async (category) => {
      try {
        const response = await getNotes(category.id);
        return [category.id, response.total] as const;
      } catch {
        return [category.id, 0] as const;
      }
    }),
  );

  const countsByCategory = Object.fromEntries(categoryCountEntries);

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.45)] backdrop-blur">
      <div className="border-b border-slate-100 bg-[linear-gradient(135deg,#eff6ff_0%,#fffbeb_100%)] px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
          Categories
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Choose a topic to filter your notes.
        </p>
      </div>

      <div className="border-b border-slate-100 px-3 py-3">
        <Link
          href="/notes/action/create"
          className="group flex items-center justify-between rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          <span>Create note</span>
          <span
            aria-hidden="true"
            className="rounded-full bg-white/15 px-2 py-0.5 text-xs text-slate-100 transition group-hover:bg-white/25"
          >
            +
          </span>
        </Link>
      </div>

      <CategoriesSidebarClient
        categories={categories}
        countsByCategory={countsByCategory}
        allNotesCount={allNotesCount}
      />
    </div>
  );
};

export default NotesSidebar;
