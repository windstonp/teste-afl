import { CiCalendar } from "react-icons/ci";

import { Control, useController } from "react-hook-form";
import DatePicker from "react-datepicker";
import { themeColors } from "@/global/theme";

type InputProps = {
  control: Control<any>;
  name: string;
  defaultValue?: string;
  label: string;
  placeholder: string;
  error?: any;
};

export function DatepickerControlled({
  control,
  name,
  defaultValue = "",
  label = "",
  placeholder,
  error,
}: InputProps) {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    control,
    name,
    defaultValue,
  });
  return (
    <div className="flex flex-col w-full relative">
      <label
        className="pl-2 mb-2 text-sm font-medium text-gray-dark"
        htmlFor={name}
      >
        {label}
      </label>
      <DatePicker
        id={name}
        onChange={(event) => {
          onChange(event);
        }}
        onBlur={onBlur}
        selected={value}
        name={name}
        ref={ref!.current?.input?.focus()}
        dateFormat="dd/MM/yyyy"
        placeholderText={placeholder}
        className="accent-gray-default bg-gray-100 border border-gray-default rounded focus:ring-gray dark:focus:ring-gray dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700  p-2 w-full"
      />
      <div
        className="absolute inset-y-0 right-0  pr-3  
                      flex items-center  
                      pointer-events-none"
      >
        <CiCalendar size={20} color={themeColors.primary} />
      </div>

      <p className="pl-2 mt-2 text-sm font-medium text-red-600">
        {error && error}
      </p>
    </div>
  );
}
