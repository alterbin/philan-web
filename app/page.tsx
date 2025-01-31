"use client"

import { Button } from "@/src/components/ui";
import { useRouter } from "next/navigation";

export default function Home() {

  const { push } = useRouter();
  return (
    <div className="items-center bg-[#f3f9f9] min-h-screen flex justify-center p-8 pb-20 gap-16 sm:p-20">
      <div className="flex justify-center w-full mt-10">
        <Button
          className="!w-[120px]"
          onClick={()=>push('/givens')}
          type="button"
          size="sm"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
