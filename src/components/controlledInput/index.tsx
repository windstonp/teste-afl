import { Control, useController } from "react-hook-form";

type InputProps = {
  control: Control<any>;
  name: string;
  defaultValue?: string;
  label: string;
  type: "text" | "email";
  placeholder: string;
  error?: any;
};

export function InputControlled({
  control,
  name,
  defaultValue = "",
  label = "",
  type,
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
    <div className="flex flex-col w-full">
      <label
        className="pl-2 mb-2 text-sm font-medium text-gray-dark"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        ref={ref}
        placeholder={placeholder}
        type={type}
        className="accent-gray-default bg-gray-100 border border-gray-default rounded focus:ring-gray dark:focus:ring-gray dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700  p-2"
      />
      <p className="pl-2 mt-2 text-sm font-medium text-red-600">
        {error && error}
      </p>
    </div>
  );
}
