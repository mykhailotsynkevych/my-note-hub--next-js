type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 lg:px-8">
      <aside className="lg:sticky lg:top-24 lg:self-start">{sidebar}</aside>
      <div className="min-w-0">{children}</div>
    </section>
  );
};

export default NotesLayout;