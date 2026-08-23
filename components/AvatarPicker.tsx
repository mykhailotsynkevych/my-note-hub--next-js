'use client';

import { ChangeEvent, useState, useEffect } from 'react';
import Image from 'next/image';

type AvatarPickerProps = {
  onChangePhoto: (file: File | null) => void;
  profilePhotoUrl?: string;
};

const AvatarPicker = ({
  profilePhotoUrl,
  onChangePhoto,
}: AvatarPickerProps) => {
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (profilePhotoUrl) {
      setPreviewUrl(profilePhotoUrl);
    }
  }, [profilePhotoUrl]);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError('');

    if (file) {
      // Перевіримо тип файлу
      if (!file.type.startsWith('image/')) {
        setError('Only images');
        return;
      }

      // Перевіримо розмір файлу (максимум 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Max file size 5MB');
        return;
      }

      onChangePhoto(file); // передаємо файл у батьківський компонент

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setPreviewUrl('');
    onChangePhoto(null); // повідомляємо батьківський компонент про видалення файлу
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="group relative h-40 w-40 shrink-0">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
          {previewUrl && (
            <Image
              src={previewUrl}
              alt="Preview"
              width={160}
              height={160}
              className="h-full w-full object-cover"
            />
          )}
          <label
            className={`absolute inset-0 z-9 flex cursor-pointer items-center justify-center gap-1 bg-slate-900/60 text-sm font-semibold text-slate-50 transition-opacity ${
              previewUrl ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
            }`}
          >
            📷 Choose photo
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
        {previewUrl && (
          <button
            type="button"
            className="absolute -right-1 -top-1 z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-xs shadow-md transition hover:bg-slate-100"
            onClick={handleRemove}
          >
            ❌
          </button>
        )}
      </div>
      {error && <p className="text-sm font-medium text-red-500">{error}</p>}
    </div>
  );
};

export default AvatarPicker;
