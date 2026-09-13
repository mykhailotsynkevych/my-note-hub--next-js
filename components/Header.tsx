import Link from 'next/link';
import AuthNav from '../components/auth/AuthNav/AuthNav';

const Header = async () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Home" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0d6efd] text-sm font-black tracking-wide text-white shadow-[0_12px_30px_-12px_rgba(14,165,233,0.8)]">
            NH
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            NoteHub
          </span>
        </Link>

        <AuthNav />
      </div>
    </header>
  );
};

export default Header;
