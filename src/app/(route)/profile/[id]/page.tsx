import { Header } from "../../_components";
import { LogoutButton, PrevButton } from "../../_components/Header/_components";
import { ProfileItem } from "./_components";

interface ProfilePageProps {
  params: Promise<{ id: string }>;
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { id } = await params;

  return (
    <>
      <Header leftChildren={<PrevButton />} rightChildren={<LogoutButton />} />
      <ProfileItem candidateId={id} />
    </>
  );
};

export default ProfilePage;
