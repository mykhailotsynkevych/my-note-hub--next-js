'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { deleteNote, Note } from "@/lib/api/clientApi";
import { TAG_COLORS } from '@/lib/tagColors';

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  const router = useRouter();
  const createdAt = new Date(item.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const { mutate: removeNote, isPending: isDeleting } = useMutation({
    mutationFn: () => deleteNote(item.id),
    onSuccess: () => {
      router.refresh();
    },
  });

  const handleDelete = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const isSure = confirm('Delete this note? This cannot be undone.');
    if (isSure) {
      removeNote();
    }
  };

  return (
    <li className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
        <Link href={`/notes/${item.id}`} className="flex h-full flex-col gap-3">        
        <div className="flex items-start justify-between gap-3">
          <h2 className="line-clamp-2 text-lg font-semibold text-[#0d6efd]">{item.title}</h2>
          <span className={`rounded-md px-2.5 py-1 text-xs font-medium ${TAG_COLORS[item.tag]}`}>
            {item.tag}
          </span>
        </div>

        <p className="line-clamp-4 text-sm leading-6 text-slate-600">{item.content}</p>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
          <time dateTime={item.createdAt}>{createdAt}</time>
        <button
          type="button"
          onClick={handleDelete}
          disabled={isDeleting}
          className="inline-flex w-fit items-center rounded-md border border-rose-200 bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700 transition hover:border-rose-300 hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
        </div>
        </Link>
    </li>
  );
}

export default NoteItem;