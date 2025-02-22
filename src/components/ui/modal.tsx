"use client";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import React, { Fragment, useRef } from "react";
import Typography from "./typography";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subTitle?: string;
  message?: string;
  children?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  children,
  subTitle,
}) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#0C1F36] backdrop-blur-[6px] bg-opacity-60 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-20 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative w-full transform overflow-hidden rounded-[20px] bg-white p-5 text-left transition-all sm:my-8 sm:w-full md:max-w-2xl max-h-screen">
                <div className="flex flex-col md:p-6 p-2">
                  <div
                    className={`relative flex flex-col items-center text-center`}
                  >
                    <button
                      onClick={onClose}
                      className="text-text_color text-xl justify-end flex w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // width="34"
                        // height="34"
                        className="md:w-[34px] md:h-[34px] w-4 h-4"
                        viewBox="0 0 34 34"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.68967 1.03385C13.8774 0.348743 20.1219 0.348743 26.3097 1.03385C29.7357 1.41785 32.4997 4.11585 32.9017 7.55385C33.6349 13.8298 33.6349 20.1699 32.9017 26.4458C32.4997 29.8838 29.7357 32.5819 26.3097 32.9659C20.1219 33.651 13.8774 33.651 7.68967 32.9659C4.26367 32.5819 1.49967 29.8838 1.09767 26.4458C0.364579 20.1705 0.364579 13.8312 1.09767 7.55585C1.301 5.88559 2.06243 4.33294 3.25854 3.14954C4.45464 1.96614 6.01533 1.22134 7.68767 1.03585M9.93967 9.93985C10.2209 9.65895 10.6022 9.50117 10.9997 9.50117C11.3972 9.50117 11.7784 9.65895 12.0597 9.93985L16.9997 14.8798L21.9397 9.93985C22.077 9.79248 22.2426 9.67427 22.4266 9.59229C22.6106 9.5103 22.8092 9.46622 23.0106 9.46267C23.212 9.45911 23.4121 9.49616 23.5989 9.5716C23.7856 9.64705 23.9553 9.75934 24.0977 9.90177C24.2402 10.0442 24.3525 10.2139 24.4279 10.4007C24.5034 10.5874 24.5404 10.7875 24.5369 10.9889C24.5333 11.1903 24.4892 11.3889 24.4072 11.5729C24.3252 11.7569 24.207 11.9225 24.0597 12.0598L19.1197 16.9998L24.0597 21.9398C24.3246 22.2242 24.4689 22.6003 24.462 22.9889C24.4552 23.3775 24.2977 23.7483 24.0229 24.0231C23.7481 24.2979 23.3773 24.4553 22.9887 24.4622C22.6001 24.4691 22.224 24.3248 21.9397 24.0598L16.9997 19.1199L12.0597 24.0598C11.9223 24.2072 11.7567 24.3254 11.5727 24.4074C11.3887 24.4894 11.1901 24.5335 10.9887 24.537C10.7873 24.5406 10.5873 24.5035 10.4005 24.4281C10.2137 24.3527 10.044 24.2404 9.90159 24.0979C9.75916 23.9555 9.64687 23.7858 9.57142 23.599C9.49598 23.4123 9.45893 23.2122 9.46249 23.0108C9.46604 22.8094 9.51012 22.6108 9.59211 22.4268C9.67409 22.2428 9.7923 22.0772 9.93967 21.9398L14.8797 16.9998L9.93967 12.0598C9.65877 11.7786 9.50099 11.3974 9.50099 10.9998C9.50099 10.6023 9.65877 10.2211 9.93967 9.93985Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    <div className="items-center text-center mb-10">
                      <h2 className="text-text_color font-bold text-xl lg:text-4xl">
                        {title || "Title"}
                      </h2>
                      <Typography
                        variant="p"
                        className="text-text_color text-base"
                      >
                        {subTitle}
                      </Typography>
                    </div>
                  </div>
                  <div className="w-full text-text_color overflow-y-auto max-h-[60vh] px-0 md:px-6 pb-6">
                    {children || message}
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
