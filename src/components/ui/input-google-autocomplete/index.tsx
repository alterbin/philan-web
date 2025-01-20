import Autocomplete, { ReactGoogleAutocompleteInputProps } from 'react-google-autocomplete';

interface InputProps extends ReactGoogleAutocompleteInputProps {
  label?: string;
  type?: string;
  name: string | undefined,
  value?: string | string[] | number | any;
  error?: string | any;
  className?: string;
  placeholder?: string;
}

export const InputGoogleAutocomplete = ({
  type,
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  className,
  placeholder,
  ...props
}: InputProps) => {

  return <div className={className || 'mb-4'}>
    <label
      htmlFor={name}
      className={`font-bold text-sm-15 md:text-base text-[rgba(255,255,255,.75)]`}
    >
      {label}
    </label>
    <div className="relative w-full mt-2 mb-2">
      <Autocomplete
        placeholder={placeholder || "Enter location address"}
        id={name}
        value={value}
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        onChange={onChange}
        onBlur={onBlur}
        className={`text-white block px-2 py-3 text-base w-full rounded-[2px] border-2 bg-transparent placeholder:text-[rgba(255,255,255,.75)] focus:outline-none ${error ? 'border-red-600' : ' border-[rgba(255,255,255,0.25)]'}`}
        {...props}
      />
    </div>
    <span className="text-red-600 text-xs lg:text-sm">{error}</span>
  </div>
};