import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-start gap-6 p-3 [border-block-end:1px_solid_#ccc]">
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className="flex justify-center items-center gap-3 list-none">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/notes">Notes</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
