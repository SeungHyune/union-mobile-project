interface ProfilePageProps {
  params: { id: string };
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { id } = await params;

  return <div>프로필 페이지 {id} </div>;
};

export default ProfilePage;
