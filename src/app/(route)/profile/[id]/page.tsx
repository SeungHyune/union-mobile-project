import { ProfileItem } from "./_components";

interface ProfilePageProps {
  params: { id: string };
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { id } = await params;

  return (
    <section>
      <ProfileItem candidateId={id} />
    </section>
  );
};

export default ProfilePage;
