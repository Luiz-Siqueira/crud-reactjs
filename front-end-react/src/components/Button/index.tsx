import React from "react";
interface buttonLoginProps {
  onClick: () => void;
  text: string;
}
export const Button = (props: buttonLoginProps) => {
  const { onClick, text } = props;
  return (
    <button
      className="w-1/2 h-9 bg-[#e74f74] text-slate-50 rounded hover:bg-[#ea6484] "
      onClick={onClick}
    >
      {text}
    </button>
  );
};
