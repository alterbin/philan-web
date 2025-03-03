import React from "react";
import "./styles.css";

interface IToggle {
  label: string;
  id: string;
  name?: string;
  classname?: string;
  size?: 'sm' | 'lg';
  checked: boolean | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const Checkbox: React.FC<IToggle> = (props) => {
  const { label, id, name, checked, onChange, disabled, classname, size = 'lg' } = props;
  return (
    <div className="flex gap-2">
      <div>
        <input
          type="checkbox"
          className={`${size === 'lg' ? "custom-checkbox" : "sm-custom-checkbox my-auto" }`}
          id={id}
          name={name ? name : id}
          onChange={onChange}
          checked={Boolean(checked)}
          disabled={disabled}
        />
      </div>
      <label htmlFor={id} className={`${size === 'lg' ? "md:text-base md:mb-5" : "md:text-xs"} font-medium  text-[10px] cursor-pointer my-auto`}>{label}</label>
    </div>
  );
};
