import React, { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  htmlFor?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    type = "text",
    label,
    htmlFor,
    onChange,
    error,
    helperText,
    ...restProps
  } = props;

  const [show, setShow] = useState(false);

  return (
    <div className=" flex-col gap-2 ">
      <label className="text-text_color mb-4 font-medium" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        type={type}
        className={`w-full px-3 py-2 border rounded text-text_color ${
          error ? " border-red-200" : ""
        }`}
        onChange={onChange}
        {...restProps}
      />
      {!!error && <p className="text-red-600">{error}</p>}
    </div>
  );
};
