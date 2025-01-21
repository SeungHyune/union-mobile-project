import { MainBanner, SpaceImage } from "@/app/_components/server";
import { LoginForm } from "./_components";

const LoginPage = () => {
  return (
    <MainBanner>
      <LoginForm />
      <SpaceImage />
    </MainBanner>
  );
};

export default LoginPage;
