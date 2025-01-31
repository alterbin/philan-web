import React, { useEffect, useState } from "react";
import { useCombobox } from "downshift";
import { Input } from "../input";
import { useDebounce } from "@/src/hooks";

interface AutocompleteProps {
  name: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  name,
  value,
  onChange,
  onBlur,
  label,
  placeholder = "Enter location",
  error,
}) => {
  const [items, setItems] = useState<string[]>([]);
  const debouncedSearch = useDebounce(value, 700);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!debouncedSearch) {
        setItems([]);
        return;
      }

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${debouncedSearch}&format=json&addressdetails=1`
        );
        const data = await response.json();
        setItems(data.map((item: any) => item.display_name));
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    fetchSuggestions();
  }, [debouncedSearch]);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    inputValue: value,
    onInputValueChange: ({ inputValue }) => {
      const event = {
        target: { name, value: inputValue || "" },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    },
    itemToString: (item) => item || "",
    onSelectedItemChange: ({ selectedItem }) => {
      const event = {
        target: { name, value: selectedItem || "" },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    },
  });

  return (
    <div className="relative">
      <Input
        {...getInputProps({
          onBlur,
        })}
        label={label}
        name={name}
        value={value}
        placeholder={placeholder}
      />
      <ul
        {...getMenuProps()}
        className={`absolute z-10 bg-white border rounded w-full mt-1 max-h-[300px] overflow-y-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              {...getItemProps({ item, index })}
              key={index}
              className={`p-2 cursor-pointer ${
                highlightedIndex === index ? "bg-gray-200" : ""
              }`}
            >
              {item}
            </li>
          ))}
      </ul>
      {error && <span className="text-red-600 text-sm">{error}</span>}
    </div>
  );
};

export default Autocomplete;
