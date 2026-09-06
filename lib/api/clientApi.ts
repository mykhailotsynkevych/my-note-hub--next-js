import { nextServer } from './api';

//AUTH 

export type LoginRequest = {
  email: string;
  password: string;
};

export type User = {
  email: string;
  userName?: string;
  avatar?: string;
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
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  category: {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};


// export const getNotes = async (categoryId?: string) => {
//   const res = await axios.get<NoteListResponse>('/notes', {
//     params: { categoryId },
//   });
//   return res.data;
// };

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

//AUTH
export const login = async (data: LoginRequest) => {
  const res = await nextServer.post<User>('/auth/login', data);
  return res.data;
};