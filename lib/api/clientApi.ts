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


export const login = async (data: AuthRequest) => {
  const res = await nextServer.post<User>('/auth/login', data);
  return res.data;
};

export const register = async (data: AuthRequest) => {
  const res = await nextServer.post<User>('/auth/register', data);
  return res.data;
};

type CheckSessionRequest = {
  success: boolean;
};

export const checkSession = async () => {
  const res = await nextServer.get<CheckSessionRequest>('/auth/session');
  return res.data.success;
};

//NOTES

export type NewNoteData = {
  title: string;
  content: string;
  categoryId: string;
};


export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  tag: string;
  // category: {
  //   id: string;
  //   name: string;
  //   description: string;
  //   createdAt: string;
  //   updatedAt: string;
  // };
  // categoryId: string;
};

// export type Category = {
//   id: string;
//   name: string;
//   description: string;
//   createdAt: string;
//   updatedAt: string;
// };

export type NoteListResponse = {
  notes: Note[];
  totalPages: number;
};


export const getNotes = async () => {
  const res = await nextServer.get<NoteListResponse>('/notes', {
    // params: { categoryId },
  });
  return res.data;
};

// export const getSingleNote = async (id: string) => {
//   const res = await axios.get<Note>(`/notes/${id}`);
//   return res.data;
// };

// export const getCategories = async () => {
//   const res = await axios.get<Category[]>('/categories');
//   return res.data;
// };

// export const createNote = async (data: NewNoteData) => {
//   const res = await axios.post<Note>('/notes', data);
//   return res.data;
// };

