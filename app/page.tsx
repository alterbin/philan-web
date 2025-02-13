"use client";

import { Button, ContactUs, Stats } from "@/src/components/ui";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  return (
    <div className="flex flex-col gap-5 min-h-[80vh] justify-between pt-20">
      <div className="flex justify-center w-full mt-10">
        <Button
          className="!w-[120px]"
          onClick={() => push("/givens")}
          type="button"
          size="sm"
        >
          Get Started
        </Button>
      </div>

      <div className="app_landing_page__px">
        <Stats />
      </div>
      <div className="app_landing_page__px">
        <ContactUs />
      </div>
    </div>
  );
}
