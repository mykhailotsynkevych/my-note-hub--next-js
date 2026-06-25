const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold tracking-tight text-slate-900">NoteHub</p>
          <p className="mt-1 max-w-md text-sm leading-6 text-slate-600">
            Keep your notes organized in one calm, focused workspace.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-slate-600 md:items-end">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
              Personal notes
            </span>
            <time dateTime={String(year)} className="font-medium text-slate-500">
              {year}
            </time>
          </div>
          <p>Created for writing, browsing, and revisiting your ideas.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;