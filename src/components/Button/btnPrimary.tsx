import React from "react";

interface ButtonProps {
  btn_name: string;
  isLarge?: boolean;
}

const BtnPrimary: React.FC<ButtonProps> = ({ btn_name, isLarge }) => {
  return (
    <button
      className={`${isLarge ? "px-12 py-3" : ""} shadow-btnBoxShadow border-solid border border-slate-500 bg-white px-6 py-2 rounded-md `}>
      {btn_name}
    </button>
  );
};

export default BtnPrimary;
