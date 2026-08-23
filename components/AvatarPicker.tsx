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
    <div>
      <div className="group relative flex h-75 w-75 items-center justify-center rounded-xl border border-white">
        {previewUrl && (
          <Image
            src={previewUrl}
            alt="Preview"
            width={300}
            height={300}
            className="h-full w-full rounded-xl object-cover"
          />
        )}
        <label
          className={`absolute inset-0 z-9 flex cursor-pointer items-center justify-center ${
            previewUrl
              ? 'opacity-0 transition-opacity group-hover:opacity-100'
              : ''
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
        {previewUrl && (
          <button
            className="absolute right-2.5 top-2.5 z-10 cursor-pointer border-none bg-transparent"
            onClick={handleRemove}
          >
            ❌
          </button>
        )}
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default AvatarPicker;
