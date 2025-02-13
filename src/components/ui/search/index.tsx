import { useDebounce } from "@/src/hooks";
import React, {
  useState,
  useRef,
  ChangeEvent,
  useCallback,
  useEffect,
} from "react";
import { SearchIcon } from "../../svgs/icons";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  handleChange: (value: string) => void;
  value?: string;
  handleChangeDependency?: any;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  handleChange,
  value,
  className,
  handleChangeDependency,
  ...props
}) => {
  const searchRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState(value || "");
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  useEffect(() => {
    handleChange(debouncedSearchValue);
  }, [debouncedSearchValue, handleChangeDependency]);

  useEffect(() => {
    if (value !== undefined) {
      setSearchValue(value);
    }
  }, [value]);

  return (
    <div
      className={`flex p-3 gap-2 bg-white rounded-[10px] border border-solid border-[#E4E7EC] shadow-sm min-w-[300px] ${className}`}
      ref={searchRef}
      {...props}
    >
      <div className="my-auto">

      <SearchIcon />
      </div>
      
      <input
        className="flex flex-1 text-text-tertiary text-base font-inter focus:outline-none"
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />
      {searchValue.length > 0 && (
        <button onClick={() => setSearchValue("")}>
          {/* <MdOutlineCancel size={16} color="#637083" /> */}x
        </button>
      )}
    </div>
  );
};
