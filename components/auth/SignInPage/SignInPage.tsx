'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login, LoginRequest } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/stores/authStore';
import { logErrorResponse } from '@/app/api/_utils/utils';
import Link from 'next/link';
import css from './SignInPage.module.css';

const SignInPage = () => {
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
        router.push('/notes/filter/all');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      logErrorResponse(error);
      setError('Oops... some error');
    }
  };

  return (
    <main className={css.mainContent}>
      <form action={handleSubmit}  className={css.form}>
        <h1 className={css.formTitle}>Sign in</h1>

        <label className={css.formGroup}>
          Email
          <input
            type="email"
            name="email"
            className={css.input}
            required
            placeholder="name@example.com"
          />
        </label>

        <label className={css.formGroup}>
          Password
          <input
            type="password"
            name="password"
            className={css.input}
            required
            placeholder="Enter your password"
          />
        </label>

        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Log in
          </button>
        </div>

        <p className={css.error}></p>

        <p className={css.switchText}>
          Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
        </p>
      </form>
    </main>
  );
};

export default SignInPage;
