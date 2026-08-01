'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Category, createNote, NewNoteData } from '@/lib/api';

type Props = {
  categories: Category[];
};

const NoteForm = ({ categories }: Props) => {
  const router = useRouter();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      router.push('/notes/filter/all');
    },
  });

  const handleCancel = () => router.push('/notes/filter/all');

  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData) as NewNoteData;
    mutate(values);
  };

  return (
    <form action={handleSubmit} className="mt-8 grid gap-6">
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-slate-700">Title</span>
        <input
          type="text"
          name="title"
          required
          minLength={3}
          maxLength={120}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
          placeholder="Enter a short title"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-slate-700">Content</span>
        <textarea
          name="content"
          required
          minLength={10}
          rows={8}
          className="w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
          placeholder="Write your note here..."
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-slate-700">Category</span>
        <select
          name="categoryId"
          required
          defaultValue={categories[0]?.id ?? ''}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      {isError && (
        <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          Failed to create note. Please check your input and try again.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? 'Creating...' : 'Create'}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
