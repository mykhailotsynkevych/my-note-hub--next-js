import { NoteTag } from '@/lib/api/clientApi';

export const TAG_COLORS: Record<NoteTag, string> = {
  Work: 'bg-blue-100 text-blue-700',
  Personal: 'bg-purple-100 text-purple-700',
  Meeting: 'bg-amber-100 text-amber-700',
  Shopping: 'bg-pink-100 text-pink-700',
  Ideas: 'bg-yellow-100 text-yellow-700',
  Travel: 'bg-teal-100 text-teal-700',
  Finance: 'bg-emerald-100 text-emerald-700',
  Health: 'bg-red-100 text-red-700',
  Important: 'bg-orange-100 text-orange-700',
  Todo: 'bg-slate-100 text-slate-700',
};
