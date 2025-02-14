import { Stats } from "./stats";
import { ContactUs } from "./contact-us";
import { HowItWorks } from "./howItWork";
import { Hero } from "./hero";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-5 min-h-[80vh] justify-between pt-20">
      <Hero />
      <div className="app_landing_page__px">
        <HowItWorks />
        <Stats />
        <ContactUs />
      </div>
    </div>
  );
}
