import { nextServer } from './api';

//AUTH 

export type User = {
  email: string;
  userName?: string;
  avatar?: string;
};

export type AuthRequest = {
  email: string;
  password: string;
};


type CheckSessionRequest = {
  success: boolean;
};

export const login = async (data: AuthRequest) => {
  const res = await nextServer.post<User>('/auth/login', data);
  return res.data;
};

export const register = async (data: AuthRequest) => {
  const res = await nextServer.post<User>('/auth/register', data);
  return res.data;
};


export const checkSession = async () => {
  const res = await nextServer.get<CheckSessionRequest>('/auth/session');
  return res.data.success;
};

export const getMe = async () => {
  const { data } = await nextServer.get<User>('/users/me');
  return data;
};

export const logout = async (): Promise<void> => {
  await nextServer.post('/auth/logout')
};

//NOTES

export const NOTE_TAGS = [
  'Work',
  'Personal',
  'Meeting',
  'Shopping',
  'Ideas',
  'Travel',
  'Finance',
  'Health',
  'Important',
  'Todo',
] as const;

export type NoteTag = (typeof NOTE_TAGS)[number];

export type NewNoteData = {
  title: string;
  content: string;
  tag: NoteTag;
};

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  tag: NoteTag;
};

export type NoteListResponse = {
  notes: Note[];
  totalPages: number;
};


export const getNotes = async (tag?: NoteTag, page = 1) => {
  const res = await nextServer.get<NoteListResponse>('/notes', {
    params: { tag, page },
  });
  return res.data;
};

export const createNote = async (data: NewNoteData) => {
  const res = await nextServer.post<Note>('/notes', data);
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await nextServer.get<Note>(`/notes/${id}`);
  return res.data;
};

export const updateNote = async (id: string, data: NewNoteData) => {
  const res = await nextServer.patch<Note>(`/notes/${id}`, data);
  return res.data;
};

export const deleteNote = async (id: string) => {
  const res = await nextServer.delete<Note>(`/notes/${id}`);
  return res.data;
};



