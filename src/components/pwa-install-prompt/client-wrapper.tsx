"use client";

import { PwaInstallPrompt } from ".";

export function PwaInstallPromptClient() {
  // Only render the component on the client side
  if (typeof window === "undefined") {
    return null;
  }

  return <PwaInstallPrompt />;
}
