import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  inputValue?: any;
  disabled?: boolean;
  onClick?: any;
  type?: "submit" | "button" | "reset";
  size?: "lg" | "md" | "sm";
  icon?: React.ReactNode;
  variant?: "filled" | "outline";
  className?: string;
  color?: "black" | "red";
}

const Button = ({
  children,
  inputValue,
  disabled,
  onClick,
  type = "submit",
  size = "lg",
  variant = "filled",
  color = "black",
  className,
}: ButtonProps) => {
  const isInputValueProvided = inputValue !== undefined;
  return (
    <button
      disabled={isInputValueProvided ? disabled : false}
      onClick={onClick}
      className={`${className} transition uppercase ${
        size === "sm"
          ? "px-5 py-[10px] text-[11px]"
          : size === "md"
          ? "text-[12px]"
          : ""
      } px-auto py-4 bg-[#CC1717] rounded-[4px] w-full gameStation ${
        isInputValueProvided && disabled
          ? "bg-grey-10 cursor-not-allowed"
          : " hover:bg-opacity-80"
      } ${
        variant === "outline"
          ? `bg-white outline outline-current ${
              color === "black" ? "text-black" : "text-[#CC1717]"
            }  outline-1`
          : "text-white"
      }
      ${disabled && "bg-grey-10 cursor-not-allowed"}
        `}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
