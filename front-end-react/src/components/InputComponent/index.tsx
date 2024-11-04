import React from "react";
interface inputProps {
  onChange: (value: any) => void;
  type: string;
  name: string;
  value: string;
  label: string;
}
export const InputComponent = (props: inputProps) => {
  const { onChange, type, name, value, label } = props;
  return (
    <div className="mt-2 mb-3">
      <label>{label}:</label>
      <input
        className="w-full pl-2 h-8"
        aria-label={name}
        type={type}
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};
