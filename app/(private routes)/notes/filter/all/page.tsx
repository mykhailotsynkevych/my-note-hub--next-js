import { getServerNotes } from "@/lib/api/serverApi";
import NoteList from "@/components/NoteList";


const Notes = async () => {
  const response = await getServerNotes();

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
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
}

export default Notes;
