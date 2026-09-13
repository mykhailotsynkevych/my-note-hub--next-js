'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateMe, UpdateUserRequest, User } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/stores/authStore';
import { logErrorResponse } from '@/app/api/_utils/utils';
import css from './EditProfilePage.module.css';

type Props = {
  user: User;
};

const EditProfilePage = ({ user }: Props) => {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleCancel = () => router.push('/profile');

  const handleSubmit = async (formData: FormData) => {
    setError('');
    setIsPending(true);
    try {
      const values = Object.fromEntries(formData) as UpdateUserRequest;
      const updatedUser = await updateMe(values);
      setUser(updatedUser);
      router.push('/profile');
    } catch (err) {
      logErrorResponse(err);
      setError('Failed to update profile. Please try again.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <main className={css.mainContent}>
      <form action={handleSubmit} className={css.form}>
        <h1 className={css.formTitle}>Edit profile</h1>

        <div className={css.avatarWrapper}>
          <img
            src={user.avatar || '/default-avatar.png'}
            alt="User avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>

        <label className={css.formGroup}>
          Username
          <input
            type="text"
            name="username"
            defaultValue={user.username}
            className={css.input}
            placeholder="Enter your username"
          />
        </label>

        <label className={css.formGroup}>
          Email
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            className={css.input}
            required
            placeholder="name@example.com"
          />
        </label>

        {error && <p className={css.error}>{error}</p>}

        <div className={css.actions}>
          <button
            type="button"
            onClick={handleCancel}
            disabled={isPending}
            className={css.cancelButton}
          >
            Cancel
          </button>
          <button type="submit" disabled={isPending} className={css.submitButton}>
            {isPending ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditProfilePage;
