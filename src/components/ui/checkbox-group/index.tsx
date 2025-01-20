interface CheckboxGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string | any;
  checked?: boolean;
}


const CheckboxGroup = ({
  label,
  id,
  name,
  value,
  ...props
}: CheckboxGroupProps) => {
  return (
    <div className="mb-4">
      <div className="flex items-start gap-x-4 md:gap-x-6">
        <label
          className="relative flex cursor-pointer items-center rounded-full"
          htmlFor={id}
        >
          <input
            type="checkbox"
            className={`before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none transition-all 
            border checked:border-secondary checked:bg-[rgba(20,184,255,0.1)] border-[rgba(255,255,255,0.25)] rounded-[4px]`}
            id={id}
            name={name}
            value={value}
            {...props}
          />
          <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-secondary opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <label
          className="-mt-[2.5px] cursor-pointer select-none text-sm font-normal leading-normal 
          text-[rgba(255,255,255,0.75)] peer-checked:text-secondary md:text-sm-15 lg:text-base"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default CheckboxGroup;
