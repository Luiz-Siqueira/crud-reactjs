import React from "react";
interface inputProps {
  onChange: (value: any) => void;
  type: string;
  name: string;
}
export const InputComponent = (props: inputProps) => {
  const { onChange, type, name } = props;
  return (
    <input
      className="w-full pl-2 h-8"
      type={type}
      name={name}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
