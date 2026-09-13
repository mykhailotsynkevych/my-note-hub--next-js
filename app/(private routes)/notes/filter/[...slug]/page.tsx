import { getServerNotes } from '@/lib/api/serverApi';
import NoteList from '@/components/NoteList';
import Pagination from '@/components/Pagination';
import { NOTE_TAGS, NoteTag } from '@/lib/api/clientApi';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ page?: string }>;
};

const NotesByTag = async ({ params, searchParams }: Props) => {
  const { slug } = await params;
  const { page } = await searchParams;
  const rawTag = slug[0];
  const tag = rawTag === 'all' ? undefined : rawTag;
  const currentPage = Number(page ?? 1);

  if (tag && !NOTE_TAGS.includes(tag as NoteTag)) {
    notFound();
  }

  const response = await getServerNotes(tag as NoteTag | undefined, currentPage);

  return (
    <div>
      <NoteList notes={response.notes} tag={tag as NoteTag | undefined} />
      <Pagination totalPages={response.totalPages} currentPage={currentPage} />
    </div>
  );
};

export default NotesByTag;