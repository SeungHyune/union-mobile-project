import { MainBanner, SpaceImage } from "../_components/server";
import { DDayTimer } from "./_components";

const RootPage = () => {
  return (
    <>
      <MainBanner>
        <DDayTimer />
        <SpaceImage />
      </MainBanner>
    </>
  );
};

export default RootPage;
