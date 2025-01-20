import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className=" flex-col gap-2">
    <label className="mb-4 font-medium">{label}</label>
    <input className="w-full px-3 py-2 border rounded" {...props} />
  </div>
);

export default Input;
