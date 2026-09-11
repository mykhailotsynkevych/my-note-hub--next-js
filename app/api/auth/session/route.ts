import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { api } from '../../api';
import { parseSetCookie } from 'cookie';
import { isAxiosError } from 'axios';
import { logErrorResponse } from '../../_utils/utils';

/*
Але це буде не просто GET-запит – нам потрібно реалізувати наступну логіку хендлера:

отримати поточні cookie
дістати значення кожного токена (accessToken, refreshToken)
якщо accessToken існує, то користувач авторизований – без запитів до API одразу повертаємо відповідь { success: true }
якщо accessToken не існує (він «протух» і автоматично зник), перевіряємо наявність refreshToken
якщо refreshToken не існує – повертаємо відповідь { success: false }
якщо refreshToken існує – виконуємо запит до API для перевірки його валідності. Якщо він дійсний, бекенд поверне нову пару свіжих токенів, і їх треба засетити так само як при логіні чи реєстрації, та повернути відповідь { success: true }
*/

export async function GET() {
  try {
    // Отримуємо інстанс для роботи з cookie
    const cookieStore = await cookies();
    // Дістаємо токени
    const accessToken = cookieStore.get('accessToken')?.value;
    const refreshToken = cookieStore.get('refreshToken')?.value;
    // Якщо accessToken є — сесія валідна
    if (accessToken) {
      return NextResponse.json({ success: true });
    }
    // Якщо accessToken немає — перевіряємо refreshToken
    if (refreshToken) {
      // Виконуємо запит до API, передаючи всі cookie у заголовку
      const apiRes = await api.get('auth/session', {
        headers: {
          Cookie: cookieStore.toString(),// перетворюємо cookie у рядок
        },
      });

      // Якщо бекенд повернув нові токени — встановлюємо їх
      const setCookie = apiRes.headers['set-cookie'];

      if (setCookie) {
        const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];
        for (const cookieStr of cookieArray) {
          const parsed = parseSetCookie(cookieStr);

          if (parsed.value) {
            cookieStore.set(parsed.name, parsed.value, parsed);
          }
        }
        return NextResponse.json({ success: true }, { status: 200 });
      }
    }
    return NextResponse.json({ success: false }, { status: 200 });
  } catch (error) {
    if (isAxiosError(error)) {
      logErrorResponse(error.response?.data);
      return NextResponse.json({ success: false }, { status: 200 });
    }
    logErrorResponse({ message: (error as Error).message });
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
