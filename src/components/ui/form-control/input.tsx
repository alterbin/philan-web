"use client";
import React, { InputHTMLAttributes, useState } from "react";
import Typography from "../typography";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  htmlFor?: string;
  helperText?: string;
  required?: boolean
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    type = "text",
    label,
    htmlFor,
    onChange,
    error,
    helperText,
    required,
    ...restProps
  } = props;

  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1 ">
      <label
        className="text-sec_text_color mb-2 text-base font-semibold"
        htmlFor={htmlFor}
      >
        {label}
        {required && <span className="text-red-10 ml-1">*</span>}
      </label>
      <input
        type={type}
        className={`w-full px-4 py-5 border border-[#DDDDDD] focus:border-sec_text_color outline-none focus:outline-none rounded-lg bg-white text-sec_text_color font-semibold placeholder:md:text-base placeholder:text-sm ${
          error ? " border-red-200" : ""
        }`}
        onChange={onChange}
        {...restProps}
      />
      {!!error && <Typography variant="p" className="text-red-600 md:text-base text-sm">{error}</Typography>}
    </div>
  );
};
