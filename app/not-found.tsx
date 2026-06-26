import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.2),transparent_34%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.2),transparent_30%),linear-gradient(180deg,#f8fafc_0%,#ffffff_72%)]" />

      <div className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full rounded-4xl border border-slate-200/80 bg-white/85 p-8 text-center shadow-[0_30px_80px_-44px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-12">
          <p className="inline-flex rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
            Error 404
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
            Page Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            The page you are looking for does not exist or has been moved.
            Please check the URL or return to the home page.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <span aria-hidden="true">←</span>
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
