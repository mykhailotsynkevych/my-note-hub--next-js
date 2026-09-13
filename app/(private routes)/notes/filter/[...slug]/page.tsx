import { getServerNotes } from '@/lib/api/serverApi';
import NoteList from '@/components/NoteList';
import { NOTE_TAGS, NoteTag } from '@/lib/api/clientApi';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByTag = async ({ params }: Props) => {
  const { slug } = await params;
  const rawTag = slug[0];
  const tag = rawTag === 'all' ? undefined : rawTag;

  if (tag && !NOTE_TAGS.includes(tag as NoteTag)) {
    notFound();
  }

  const response = await getServerNotes(tag as NoteTag | undefined);

  return (
    <div>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </div>
  );
};

export default NotesByTag;