import { getServerSingleNote } from '@/lib/api/serverApi';
import Modal from '@/components/Modal';
import { TAG_COLORS } from '@/lib/tagColors';

type Props = {
  params: Promise<{ id: string }>;
};


const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getServerSingleNote(id);

  const createdAt = new Date(note.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Modal>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-3 justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">{note.title}</h2>
          <span className={`rounded-md px-2.5 py-1 text-xs font-medium ${TAG_COLORS[note.tag]}`}>
            {note.tag}
          </span>
        </div>
        

        <p className="whitespace-pre-wrap text-sm leading-6 text-slate-600">{note.content}</p>
          <time dateTime={note.createdAt} className="text-xs text-slate-500">
            {createdAt}
          </time>
      </div>
    </Modal>
  );
};

export default NotePreview;