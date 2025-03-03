import classNames from 'classnames';
import React, { useState } from 'react';
interface TooltipProps {
  message: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  Icon?: React.ReactNode;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  message,
  position = 'bottom',
  className,
  Icon,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {Icon}
      {isVisible && (
        <div
          className={classNames(
            className,
            `absolute px-2.5 py-2 text-xs text-white rounded-lg bg-[#141C25] w-[230px] h-fit z-10 transition-opacity duration-200 ${
              position === 'top'
                ? 'bottom-full mb-2 left-1/2 transform -translate-x-1/2'
                : position === 'bottom'
                ? 'top-full mt-2 left-1/2 transform -translate-x-1/2'
                : position === 'left'
                ? 'right-full mr-2 top-1/2 transform -translate-y-1/2'
                : 'left-full ml-2 top-1/2 transform -translate-y-1/2'
            }`,
          )}
        >
          {message}
          <svg
            width="14"
            height="6"
            viewBox="0 0 14 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute ${
              position === 'top'
                ? 'bottom-[-6px] left-1/2 transform -translate-x-1/2 rotate-180'
                : position === 'bottom'
                ? 'top-[-6px] left-1/2 transform -translate-x-1/2'
                : position === 'left'
                ? 'right-[-10px] top-1/2 transform -translate-y-1/2 rotate-90'
                : 'left-[-10px] top-1/2 transform -translate-y-1/2 -rotate-90'
            }`}
          >
            <path
              d="M6.29289 0.707106C6.68342 0.316582 7.31658 0.316582 7.70711 0.707107L13 6H1L6.29289 0.707106Z"
              fill="#141C25"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

