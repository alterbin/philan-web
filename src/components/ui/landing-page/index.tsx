"use client";

import { Stats } from "./stats";
import { ContactUs } from "./contact-us";
import { HowItWorks } from "./howItWork";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-5 min-h-[80vh] justify-between pt-20">
      <div className="app_landing_page__px">
        <HowItWorks />
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
