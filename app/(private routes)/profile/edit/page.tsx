// app/(private routes)/profile/edit/page.tsx

'use client';

import { useEffect, useState } from 'react';
import AvatarPicker from '@/components/AvatarPicker';
import { getMe, updateMe, uploadImage } from '@/lib/api/clientApi';

const EditProfile = () => {
  const [userName, setUserName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getMe().then((user) => {
      setUserName(user.userName ?? '');
      setPhotoUrl(user.photoUrl ?? '');
    });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSaveUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    let newPhotoUrl = photoUrl;
    if (imageFile) {
      try {
        newPhotoUrl = await uploadImage(imageFile);
      } catch (error) {
        console.error('Oops, some error:', error);
        setErrorMessage(
          'Не вдалося завантажити зображення. Ім’я буде збережено без оновлення фото.',
        );
      }
    }

    try {
      await updateMe({ userName, photoUrl: newPhotoUrl });
    } catch (error) {
      console.error('Oops, some error:', error);
      setErrorMessage((prev) => prev || 'Не вдалося зберегти зміни.');
    }
  };

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(250,204,21,0.14),transparent_28%),linear-gradient(180deg,#f8fafc_0%,#ffffff_72%)]" />

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <span className="inline-flex w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
          Profile
        </span>

        <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur sm:p-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Edit profile
          </h1>

          <div className="mt-8 flex flex-col items-center gap-6 border-t border-slate-100 pt-8 sm:flex-row sm:items-start">
            <AvatarPicker
              profilePhotoUrl={photoUrl}
              onChangePhoto={setImageFile}
            />

            <form
              onSubmit={handleSaveUser}
              className="flex w-full flex-col gap-4"
            >
              <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                Name
                <input
                  type="text"
                  value={userName}
                  onChange={handleChange}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-base text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm transition hover:bg-slate-700"
              >
                Save user
              </button>

              {errorMessage && (
                <p className="text-sm font-medium text-red-500">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
