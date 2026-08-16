'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register, RegisterRequest } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import { ApiError } from '@/app/api/api';

const SignUp = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  // Отримуємо метод із стора
  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (formData: FormData) => {
    try {
      // Типізуємо дані форми
      const formValues = Object.fromEntries(formData) as RegisterRequest;
      // Виконуємо запит
      const res = await register(formValues);
      // Виконуємо редірект або відображаємо помилку
      if (res) {
        // Записуємо користувача у глобальний стан
        setUser(res);
        router.push('/profile');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message ??
          'Oops... some error',
      );
    }
  };

  return (
    <main className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.2),transparent_32%),linear-gradient(180deg,#f8fafc_0%,#ffffff_74%)]" />

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:gap-10 lg:px-8 lg:py-16">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
            Join NoteHub
          </span>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Create your account and start capturing ideas.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Keep your notes organized, searchable, and synced with a clean
            workspace built for focus.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Private space
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Personal profile and notes area available right after
                registration.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Fast setup
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Start in less than a minute with just username, email, and
                password.
              </p>
            </article>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_80px_-44px_rgba(15,23,42,0.45)] backdrop-blur sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Registration
          </p>

          <form action={handleSubmit} className="mt-5 grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">
                Username
              </span>
              <input
                type="text"
                name="userName"
                required
                minLength={3}
                maxLength={40}
                autoComplete="username"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                placeholder="Choose your username"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                placeholder="name@example.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">
                Password
              </span>
              <input
                type="password"
                name="password"
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                placeholder="At least 8 characters"
              />
            </label>

            <p className="text-xs leading-5 text-slate-500">
              By registering, you agree to our terms and privacy policy.
            </p>

            {error && <p>{error}</p>}

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
