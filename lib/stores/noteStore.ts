import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { NewNoteData, NOTE_TAGS } from '../api/clientApi';

type NoteDraftStore = {
  draft: NewNoteData;
  setDraft: (note: NewNoteData) => void;
  clearDraft: () => void;
};

const initialDraft: NewNoteData = {
  title: '',
  content: '',
  tag: NOTE_TAGS[0],
};

export const useNoteDraftStore = create<NoteDraftStore>()(
	// 2. Обгортаємо функцію створення стора
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
	    // Ключ у localStorage
      name: 'note-draft',
      // Зберігаємо лише властивість draft
      partialize: (state) => ({ draft: state.draft }),
    },
  ),
);