import Link from 'next/link';
import { Note } from "@/lib/api";

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  const createdAt = new Date(item.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <li className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
        <Link href={`/notes/${item.id}`} className="flex h-full flex-col gap-3">        
        <div className="flex items-start justify-between gap-3">
          <h2 className="line-clamp-2 text-lg font-semibold text-slate-900">{item.title}</h2>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            {item.category.name}
          </span>
        </div>

        <p className="line-clamp-4 text-sm leading-6 text-slate-600">{item.content}</p>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
          <span>ID: {item.id.slice(0, 8)}</span>
          <time dateTime={item.createdAt}>{createdAt}</time>
        </div>
        </Link>
    </li>
  );
}

export default NoteItem;