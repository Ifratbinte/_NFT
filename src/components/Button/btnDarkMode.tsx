import React from "react";

interface ButtonProps {
  btn_name: any;
  isDark?: boolean;
}

const BtnPrimary: React.FC<ButtonProps> = ({ btn_name, isDark }) => {
  return (
    <button
      className={`${
        !isDark ? "bg-white text-slate-800 transition-all " : "bg-primary text-white px-5"
      } p-3 font-semibold text-lg rounded shadow border-solid`}
    >
      {btn_name}
    </button>
  );
};

export default BtnPrimary;
