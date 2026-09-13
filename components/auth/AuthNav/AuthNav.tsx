'use client';

import Link from 'next/link';
import { useAuthStore } from '@/lib/stores/authStore';
import css from './AuthNav.module.css';
import { logout } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';

const AuthNav = () => {
  const router = useRouter();
  // Отримуємо поточну сесію та юзера
  const { isAuthenticated, user } = useAuthStore();

  // Отримуємо метод очищення глобального стану
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );

  const handleLogout = async () => {
    // Викликаємо logout
    await logout();
    // Чистимо глобальний стан
    clearIsAuthenticated();
    // Виконуємо навігацію на сторінку авторизації
    router.push('/sign-in');
  };

  // Якщо є сесія - відображаємо Logout та інформацію про користувача
  // інакше - посилання на логін та реєстрацію
  return (
    <nav aria-label="Main Navigation">
      <ul className="flex items-center gap-6 rounded-md  bg-[#0d6efd] py-2.5 px-4 text-sm font-medium text-white shadow-sm">
        {isAuthenticated ? (
          <>
            <li className={css.navigationItem}>
              <Link
                href="/notes/filter/all"
                className="flex items-center justify-between rounded-md px-3 py-1 text-sm font-medium text-white transition hover:bg-white hover:text-slate-900"
              >
                <span>Notes</span>
                {/* <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                {categories.length}
              </span> */}
              </Link>
            </li>
            <li className={css.navigationItem}>
              <Link href="/profile" className={css.userEmail}>
                {user?.email}
              </Link>
              <button className={css.logoutButton} onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className={css.navigationItem}>
              <Link className={css.navigationLink} href="/sign-in">
                Login
              </Link>
            </li>
            <li className={css.navigationItem}>
              <Link className={css.navigationLink} href="/sign-up">
                Sign up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default AuthNav;
