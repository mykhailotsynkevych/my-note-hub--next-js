'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register, AuthRequest } from '@/lib/api/clientApi';
import { logErrorResponse } from '@/app/api/_utils/utils';
import Link from 'next/link';
import css from './SignUpPage.module.css';

const SignUpPage = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    try {
      // Типізуємо дані форми
      const formValues = Object.fromEntries(formData) as AuthRequest;
      // Виконуємо запит
      const res = await register(formValues);
      // Виконуємо редірект або відображаємо помилку
      if (res) {
        router.push('/profile');
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
      <form action={handleSubmit} className={css.form}>
        <h1 className={css.formTitle}>Sign up</h1>

        <label className={css.formGroup}>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={css.input}
            required
          />
        </label>

        <label className={css.formGroup}>
          Password
          <div className={css.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              className={css.input}
              required
            />
            <button
              type="button"
              className={css.togglePassword}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </label>

        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Register
          </button>
        </div>

        <p className={css.error}>{error}</p>

        <p className={css.switchText}>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </p>
      </form>
    </main>
  );
};

export default SignUpPage;
