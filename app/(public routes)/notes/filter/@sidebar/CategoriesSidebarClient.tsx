'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Category } from '@/lib/api';

type Props = {
  categories: Category[];
  countsByCategory: Record<string, number>;
  allNotesCount: number;
};

const CategoriesSidebarClient = ({ categories, countsByCategory, allNotesCount }: Props) => {
  const pathname = usePathname();

  const isAllActive = pathname === '/notes/filter/all';

  return (
    <ul className="max-h-[65vh] space-y-1 overflow-y-auto p-3">
      <li>
        <Link
          href="/notes/filter/all"
          aria-current={isAllActive ? 'page' : undefined}
          className={`group flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-medium transition ${
            isAllActive
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          <span>All notes</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs ${
              isAllActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
            }`}
          >
            {allNotesCount}
          </span>
        </Link>
      </li>

      <li className="my-1 h-px bg-slate-100" />

      {categories.map((category) => {
        const href = `/notes/filter/${category.id}`;
        const isActive = pathname === href;
        const noteCount = countsByCategory[category.id] ?? 0;
        const showCount = noteCount > 0;

        return (
          <li key={category.id}>
            <Link
              href={href}
              aria-current={isActive ? 'page' : undefined}
              className={`group flex items-start justify-between gap-3 rounded-2xl px-3 py-2.5 transition ${
                isActive
                  ? 'bg-sky-100 ring-1 ring-sky-200'
                  : 'hover:bg-sky-50'
              }`}
            >
              <span className="flex min-w-0 flex-col gap-0.5">
                <span
                  className={`truncate text-sm font-medium ${
                    isActive
                      ? 'text-sky-900'
                      : 'text-slate-700 group-hover:text-slate-900'
                  }`}
                >
                  {category.name}
                </span>
                <span
                  className={`line-clamp-1 text-xs ${
                    isActive ? 'text-sky-700/90' : 'text-slate-400'
                  }`}
                >
                  {category.description || 'No description'}
                </span>
              </span>

              {showCount && (
                <span
                  className={`mt-0.5 rounded-full px-2 py-0.5 text-xs font-semibold ${
                    isActive
                      ? 'bg-sky-200 text-sky-900'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-sky-100 group-hover:text-sky-800'
                  }`}
                >
                  {noteCount}
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesSidebarClient;
