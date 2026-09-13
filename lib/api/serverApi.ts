import { cookies } from 'next/headers';
import { nextServer } from './api';
import { NoteListResponse, NoteTag, User } from './clientApi';

export const checkServerSession = async () => {
  // Дістаємо поточні cookie
  const cookieStore = await cookies();
  const res = await nextServer.get('/auth/session', {
    headers: {
      // передаємо кукі далі
      Cookie: cookieStore.toString(),
    },
  });
  // Повертаємо повний респонс, щоб proxy мав доступ до нових cookie
  return res;
};

export const getServerMe = async (): Promise<User> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get('/users/me', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};

export const getServerNotes = async (
  tag?: NoteTag,
  page = 1
): Promise<NoteListResponse> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<NoteListResponse>('/notes', {
    params: { tag, page },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};