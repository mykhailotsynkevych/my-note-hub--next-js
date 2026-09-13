'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NOTE_TAGS } from '@/lib/api/clientApi';

const TagsSidebarClient = () => {
  const pathname = usePathname();

  const isAllActive = pathname === '/notes/filter/all';

  return (
    <ul className="max-h-[65vh] space-y-1 overflow-y-auto p-3">
      <li>
        <Link
          href="/notes/filter/all"
          aria-current={isAllActive ? 'page' : undefined}
          className={`group flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition ${
            isAllActive
              ? 'bg-[#0d6efd] text-white shadow-sm'
              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          All notes
        </Link>
      </li>

      <li className="my-1 h-px bg-slate-100" />

      {NOTE_TAGS.map((tag) => {
        const href = `/notes/filter/${tag}`;
        const isActive = pathname === href;

        return (
          <li key={tag}>
            <Link
              href={href}
              aria-current={isActive ? 'page' : undefined}
              className={`group flex items-start justify-between gap-3 rounded-md px-3 py-2.5 transition ${
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
                  {tag}
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TagsSidebarClient;
