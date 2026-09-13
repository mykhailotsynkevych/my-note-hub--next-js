import { getServerNotes } from "@/lib/api/serverApi";
import NoteList from "@/components/NoteList";
import Pagination from "@/components/Pagination";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

const Notes = async ({ searchParams }: Props) => {
  const { page } = await searchParams;
  const currentPage = Number(page ?? 1);
  const response = await getServerNotes(undefined, currentPage);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <span className="inline-flex items-center rounded-md border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
          Notes
        </span>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-[#0d6efd] sm:text-5xl">
          Notes List
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
          One place for your ideas, drafts, and everything worth saving.
        </p>
      </div>
      <NoteList notes={response.notes} />
      <Pagination totalPages={response.totalPages} currentPage={currentPage} />
    </section>
  );
}

export default Notes;
