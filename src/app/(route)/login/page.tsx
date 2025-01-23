import { MainBanner, SpaceImage } from "@/app/_components/server";
import { LoginForm } from "./_components";
import { Header } from "../_components";
import { LogoutButton } from "../_components/Header/_components";

const LoginPage = () => {
  return (
    <>
      <Header rightChildren={<LogoutButton />} />
      <MainBanner>
        <LoginForm />
        <SpaceImage />
      </MainBanner>
    </>
  );
};

export default LoginPage;
