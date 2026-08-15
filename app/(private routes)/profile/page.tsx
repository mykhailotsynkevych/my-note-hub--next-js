import Link from 'next/link';

const Profile = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(250,204,21,0.14),transparent_28%),linear-gradient(180deg,#f8fafc_0%,#ffffff_72%)]" />

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <span className="inline-flex w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
          Profile
        </span>

        <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur sm:p-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            My Profile
          </h1>
          <h2 className="mt-3 text-lg font-semibold text-slate-700">
            Name: User name
          </h2>

          <div className="prose prose-slate mt-6 max-w-none border-t border-slate-100 pt-6">
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Some description: Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Cumque non quis, vero consectetur eum at
              commodi facere error, laborum, rerum labore corrupti neque
              veritatis sed minima et nam. Autem, cumque.
            </p>
          </div>

          <Link
            href="/profile/edit"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm transition hover:bg-slate-700"
          >
            Edit profile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;
