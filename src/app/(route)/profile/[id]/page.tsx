import { ProfileItem } from "./_components";

interface ProfilePageProps {
  params: Promise<{ id: string }>;
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { id } = await params;

  return <ProfileItem candidateId={id} />;
};

export default ProfilePage;
