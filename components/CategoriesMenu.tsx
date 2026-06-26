'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Category } from '@/lib/api';

type Props = {
  categories: Category[];
};

const CategoriesMenu = ({ categories }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <button onClick={toggle}>
        Notes
      </button>
      {isOpen && (
        <ul>
          <li>
            <Link href={`/notes/filter/all`} onClick={toggle}>
              All notes
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`/notes/filter/${category.id}`} onClick={toggle}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesMenu;