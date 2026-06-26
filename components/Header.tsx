import Link from 'next/link';
import { getCategories } from '@/lib/api';

const Header = async () => {
  const categories = await getCategories();

    const handleClick = () => {
    console.log('Clicked category button');
  };
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Home" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0ea5e9_0%,#f59e0b_100%)] text-sm font-black tracking-wide text-white shadow-[0_12px_30px_-12px_rgba(14,165,233,0.8)]">
            NH
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            NoteHub
          </span>
        </Link>

        <nav aria-label="Main Navigation">
          <ul className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/90 p-1 text-sm font-medium text-slate-600 shadow-sm">
          <li>
            <Link href="/" className="rounded-full px-4 py-2 transition hover:bg-white hover:text-slate-900">
              Home
            </Link>
          </li>
                    <li><button onClick={handleClick}>Open menu</button></li>
          <li>
            <Link href="/notes" className="rounded-full px-4 py-2 transition hover:bg-white hover:text-slate-900">
              Notes
            </Link>
          </li>
          <li>
            <Link href="/profile" className="rounded-full px-4 py-2 transition hover:bg-white hover:text-slate-900">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/about" className="rounded-full px-4 py-2 transition hover:bg-white hover:text-slate-900">
              About
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
