"use client";

import React, { useState } from "react";
import { usePwaInstall } from "@/src/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui";
import Typography from "../ui/typography";

export function PwaInstallPrompt() {
  const { isInstallable, promptInstall } = usePwaInstall();
  const [isDismissed, setIsDismissed] = useState(false);

  const handleInstallClick = async () => {
    const outcome = await promptInstall();
    if (outcome === "dismissed") {
      setIsDismissed(true);
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (!isInstallable || isDismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 left-4 max-w-[420px] mx-auto right-4 bg-white p-4 rounded-lg shadow-lg z-50 flex flex-col"
      >
        <div className="flex items-center justify-between">
          <Typography variant="h3" fontWeight="bd">
            Install Philan App
          </Typography>
          <button
            onClick={handleDismiss}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <Typography variant="p" className="mb-4">
          Add Philan to your home screen for a better experience
        </Typography>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" size="sm" onClick={handleDismiss}>
            Maybe later
          </Button>
          <Button variant="filled" size="sm" onClick={handleInstallClick}>
            Install Now
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
