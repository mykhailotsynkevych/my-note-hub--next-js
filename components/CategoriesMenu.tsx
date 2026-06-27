'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Category } from '@/lib/api';

type Props = {
  categories: Category[];
};

const CategoriesMenu = ({ categories }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-900"
      >
        Categories
        <span
          aria-hidden="true"
          className={`text-xs transition ${isOpen ? 'rotate-180' : ''}`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <ul
          role="menu"
          className="absolute right-0 top-[calc(100%+10px)] z-50 w-72 overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_28px_60px_-35px_rgba(15,23,42,0.45)]"
        >
          <li className="px-3 pb-2 pt-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Filter notes
            </p>
          </li>

          <li>
            <Link
              href="/notes/filter/all"
              onClick={toggle}
              className="flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <span>All notes</span>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                {categories.length}
              </span>
            </Link>
          </li>

          <li className="my-1 h-px bg-slate-100" />

          <li className="max-h-72 space-y-1 overflow-y-auto pr-1">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/notes/filter/${category.id}`}
                onClick={toggle}
                className="group flex rounded-2xl px-3 py-2.5 transition hover:bg-sky-50"
              >
                  <span className=" truncate text-sm font-medium text-slate-700 group-hover:text-slate-900">
                    {category.name}
                  </span>
              </Link>
            ))}
          </li>
        </ul>
      )}
    </div>
  );
};

export default CategoriesMenu;
