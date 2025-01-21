"use client";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  htmlFor?: string;
}

export const Textarea: React.FC<InputProps> = (props: InputProps) => {
  const { label, htmlFor, error, ...restProps } = props;

  return (
    <div className="flex flex-col text-start ">
      <label className="text-text_color font-medium" htmlFor={htmlFor}>
        {label}
      </label>

      <textarea
        rows={5}
        cols={2}
        style={{
          border: "1px solid gray",
          maxHeight: "72px",
        }}
        className={`w-full bottom-1 !border-grey-10  p-1 focus:outline-none focus:border-black  px-3 py-2 border rounded bg-white text-text_color ${
          error ? " border-red-200" : ""
        }`}
        {...restProps}
      />
      {!!error && <p className="text-red-600">{error}</p>}
    </div>
  );
};
