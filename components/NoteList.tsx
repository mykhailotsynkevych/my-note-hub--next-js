import { Note, NoteTag } from "@/lib/api/clientApi";
import NoteItem from "./NoteItem";

type Props = {
  notes: Note[];
  tag?: NoteTag;
};

const NoteList = ({ notes, tag }: Props) => {
  if (notes.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white/60 px-6 py-16 text-center">
        <p className="text-lg font-semibold text-slate-700">No notes found</p>
        <p className="mt-2 text-sm text-slate-500">
          {tag
            ? `There are no notes with the "${tag}" tag yet.`
            : 'There are no notes yet.'}
        </p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {notes.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </ul>
  );
}

export default NoteList;