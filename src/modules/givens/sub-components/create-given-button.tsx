"use client";
import { useModals } from "@/src/contexts/modals";

export const CreateGivenButton = () => {
  const { setModals } = useModals();

  const handleOpen = () => {
    setModals((prev) => ({ ...prev, show: true }));
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed bottom-40 right-4 bg-green-90 hover:opacity-75 rounded-full p-2 shadow-2xl w-[80px] h-[80px] flex items-center justify-center transition-all ease-in-out duration-150 z-50"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <g clipPath="url(#clip0_490_2423)">
              <path
                d="M0.928818 17.959C1.95312 19.0039 3.55034 18.9355 4.62673 17.959L12.6476 10.7422C13.6285 9.85352 14.8524 9.375 16.1198 9.375L26.3889 9.375C27.1528 9.375 27.7778 10.0781 27.7778 10.9375C27.7778 11.7969 27.1528 12.5 26.3889 12.5L19.592 12.5C18.2118 12.5 16.9271 13.5645 16.7014 15.0977C16.4149 17.0508 17.7517 18.75 19.4444 18.75L33.3333 18.75C35.6771 18.75 37.9427 17.8418 39.7656 16.1816L43.8021 12.5H48.6111C49.375 12.5 50 11.7969 50 10.9375V1.5625C50 0.703125 49.375 0 48.6111 0L17.6389 0C16.3802 0 15.1562 0.478516 14.1667 1.36719L1.04166 13.1836C-0.277779 14.3652 -0.381947 16.6309 0.928818 17.959Z"
                fill="white"
              />
              <path
                d="M24.8794 29.9985L24.5409 43.9944"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7124 36.8274L31.7083 37.1658"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_490_2423">
                <rect
                  width="50"
                  height="50"
                  fill="white"
                  transform="matrix(-1 0 0 -1 50 50)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>
    </>
  );
};
