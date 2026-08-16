'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';
import { logout } from '@/lib/api';

const AuthNavigation = () => {
  const router = useRouter();
  // Отримуємо поточну сесію та юзера
  const { isAuthenticated, user } = useAuthStore();
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
  return isAuthenticated ? (
    <li className="flex items-center gap-3">
      <Link
        href="/profile"
        className="rounded-full px-4 py-2 transition hover:bg-white hover:text-slate-900"
      >
        {user?.email}
      </Link>
      <button
        onClick={handleLogout}
        className="rounded-full bg-white/10 px-4 py-2 font-semibold transition hover:bg-white hover:text-slate-900"
      >
        Logout
      </button>
    </li>
  ) : (
    <>
      <li>
        <Link
          href="/sign-in"
          className="rounded-full px-4 py-2 transition hover:bg-white hover:text-slate-900"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          href="/sign-up"
          className="rounded-full px-4 py-2 transition hover:bg-white hover:text-slate-900"
        >
          Sign up
        </Link>
      </li>
    </>
  );
};

export default AuthNavigation;
