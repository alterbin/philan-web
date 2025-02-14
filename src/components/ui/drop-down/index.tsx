"use client"

import React, { useState, useRef, useEffect } from "react";
import { ArrowDown, ArrowUp } from "../../svgs/icons/arrows";
import { FilterIcon } from "../../svgs/icons";

interface SelectDropdownProps {
  data?: {
    label: string;
    children?: React.ReactNode;
  }[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  handleSelect?: (value: string) => void;
  value?: string;
  className?: string;
  btnClassName?: string;
}

export const Dropdown: React.FC<SelectDropdownProps> = ({
  data = [],
  placeholder = "Select an option",
  label,
  required = false,
  handleSelect = (value) => null,
  value = "",
  className,
  btnClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    handleSelect(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`relative text-left w-full flex flex-col ${className}`}
    >
      {label && (
        <label className="text-sm font-semibold text-gray-700 pb-1 flex gap-1 items-center">
          {label}
          <span className="text-red-500">{required ? "*" : ""}</span>
        </label>
      )}

      <div>
        <button
          onClick={handleToggleDropdown}
          className={`${btnClassName} inline-flex justify-between items-center w-full rounded-[10px] px-3 py-2 bg-[#DD9940] text-gray-400 `}
        >
          {value ? (
            <div className="text-white font-medium flex gap-2 text-base">
              <div className="my-auto">
                <FilterIcon />
              </div>
              {value}
            </div>
          ) : (
            placeholder
          )}
          {/* <span className="ml-2">
            {isOpen ? (
              <ArrowUp  />
            ) : (
              <ArrowDown/>
            )}
          </span> */}
        </button>
      </div>

      {isOpen && data.length > 0 && (
        <div
          className={`absolute top-0 left-0 ${
            label ? "mt-[80px]" : "mt-[50px]"
          } w-full max-h-[180px] overflow-y-auto py-2 rounded-xl z-20 shadow-lg bg-white border border-solid border-[#E4E7EC] transition ease-out duration-200 transform`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-between gap-1.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 bg-white cursor-pointer"
              onClick={() => handleItemClick(item.label)}
              role="menuitem"
            >
              <div className="flex-1 text-text-secondary text-sm">
                {item.label}
              </div>
              {item.children}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
