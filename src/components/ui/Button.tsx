import React from "react";
import clsx from "clsx"; // Optional: Helps clean up class merging

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "button" | "reset";
  size?: "lg" | "md" | "sm";
  icon?: React.ReactNode;
  variant?: "filled" | "outline" | "gold";
  className?: string;
  color?: "green" | "red";
}

export const Button = ({
  children,
  disabled = false,
  onClick,
  type = "submit",
  size = "lg",
  variant = "filled",
  color = "green",
  className = "",
  icon,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={clsx(
        "transition uppercase hover:opacity-80 px-5 py-3 rounded-[4px] w-full flex items-center justify-center gap-2 bg-green-90",
        {
          // Size styles
          "text-[11px] py-2 px-4 rounded-[10px]": size === "sm",
          "text-[12px] py-3 px-5": size === "md",
          "text-[14px] py-4 px-4": size === "lg",

          // Variant styles
          "bg-green-90 text-white": variant === "filled" && color === "green",
          "bg-red-600 text-white": variant === "filled" && color === "red",
          "bg-[#DD9940] text-white": variant === "gold",
          "bg-white outline outline-1": variant === "outline",
          "text-[#000] outline-[#000]":
            variant === "outline" && color === "green",
          "text-green-90 outline-green-90":
            variant === "outline" && color === "red",

          // Disabled styles
          "cursor-not-allowed opacity-60": disabled,
        },
        className // Allow additional styles
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
