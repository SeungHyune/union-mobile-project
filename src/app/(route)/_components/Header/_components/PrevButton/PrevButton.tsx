"use client";

import { PrevIcon } from "@/app/_components/server/icons";
import { useRouter } from "next/navigation";

const PrevButton = () => {
  const router = useRouter();

  return (
    <button type="button">
      <PrevIcon onClick={() => router.back()} />
    </button>
  );
};

export default PrevButton;
