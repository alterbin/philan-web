"use client";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  htmlFor?: string;
  required?: boolean
}

export const Textarea: React.FC<InputProps> = (props: InputProps) => {
  const { label, htmlFor, error, required, ...restProps } = props;

  return (
    <div className="flex flex-col text-start ">
      <label className="text-text_color font-medium" htmlFor={htmlFor}>
        {label}
        {required && <span className="text-red-10 ml-1">*</span>}
      </label>

      <textarea
        rows={5}
        cols={2}
        style={{
          maxHeight: "118px",
        }}
        maxLength={150}
        className={`w-full bottom-1 focus:outline-none px-4 py-5 border !border-[#DDDDDD] !focus:border-sec_text_color focus-within:border-red-200 outline-none rounded-lg bg-white text-sec_text_color font-semibold ${
          error ? " border-red-200" : ""
        }`}
        {...restProps}
      />
      {!!error && <p className="text-red-600">{error}</p>}
    </div>
  );
};
