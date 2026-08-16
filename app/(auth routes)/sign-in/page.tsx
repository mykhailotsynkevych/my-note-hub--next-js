'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login, LoginRequest } from '@/lib/api';
import { useAuthStore } from '@/lib/store/authStore';
import { ApiError } from '@/app/api/api';

const SignIn = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  // Отримуємо метод із стора
  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (formData: FormData) => {
    try {
      // Типізуємо дані форми
      const formValues = Object.fromEntries(formData) as LoginRequest;
      // Виконуємо запит
      const res = await login(formValues);
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

      <section className="mx-auto flex w-full max-w-md flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <span className="inline-flex w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
          Welcome back
        </span>

        <div className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_80px_-44px_rgba(15,23,42,0.45)] backdrop-blur sm:p-7">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Sign in
          </h1>

          <form action={handleSubmit} className="mt-6 grid gap-5">
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
                autoComplete="current-password"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:ring-4 focus:ring-sky-100"
                placeholder="Enter your password"
              />
            </label>

            {error && <p>{error}</p>}

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Log in
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
