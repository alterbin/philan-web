import LandingPage from "@/src/components/ui/landing-page";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <LandingPage />
    </Suspense>
  );
}
