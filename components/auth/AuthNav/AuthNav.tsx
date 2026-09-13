'use client'

import Link from 'next/link'
import { useAuthStore } from '@/lib/stores/authStore'
import css from './AuthNav.module.css'

const AuthNav = () => {
  // Отримуємо поточну сесію та юзера
  const { isAuthenticated, user } = useAuthStore();

  const handleLogout = () => {};

  // Якщо є сесія - відображаємо Logout та інформацію про користувача
  // інакше - посилання на логін та реєстрацію
  return isAuthenticated ? (
    <li className={css.navigationItem}>

                    <Link
                href="/profile"
                className="rounded-full px-4 py-2 transition hover:bg-white hover:text-slate-900"
              >
                     <p className={css.userEmail}>{user?.email}</p>
              </Link>
      <button className={css.logoutButton} onClick={handleLogout}>Logout</button>
    </li>
  ) : (
    <>
      <li className={css.navigationItem}>
	      <Link className={css.navigationLink} href="/sign-in">Login</Link>
      </li>
	    <li className={css.navigationItem}>
	      <Link className={css.navigationLink} href="/sign-up">Sign up</Link>
	    </li>
    </>
  );
};

export default AuthNav;