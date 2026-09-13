import { Metadata } from 'next';
import { getServerMe } from '@/lib/api/serverApi';
import EditProfilePage from '@/components/auth/EditProfilePage/EditProfilePage';

export const metadata: Metadata = {
  title: 'Edit Profile',
  description: 'Edit your user details and settings',
};

const EditProfile = async () => {
  const user = await getServerMe();
  return <EditProfilePage user={user} />;
};

export default EditProfile;