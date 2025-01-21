import React from "react";
import "./styles.css";

interface IToggle {
  label: string;
  id: string;
  name?: string;
  checked: boolean | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const Checkbox: React.FC<IToggle> = (props) => {
  const { label, id, name, checked, onChange, disabled } = props;
  return (
    <div className="flex gap-2">
      <div>
        <input
          type="checkbox"
          className="form-check-input custom-checkbox"
          id={id}
          name={name ? name : id}
          onChange={onChange}
          checked={Boolean(checked)}
          disabled={disabled}
        />
      </div>
      <label htmlFor={id} className="font-medium mb-5 text-base cursor-pointer">{label}</label>
    </div>
  );
};
