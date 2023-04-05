import React from "react";

interface ButtonProps {
  btn_name: string;
  isOutline?: boolean;
}

const BtnPrimary: React.FC<ButtonProps> = ({ btn_name, isOutline }) => {
  return (
    <button
      className={`${
        isOutline ? "bg-white text-primary hover:bg-primary hover:text-white transition-all px-6" : "bg-primary text-white px-5"
      } py-2 font-semibold text-md rounded shadow-sm border-primary border-2 border-solid font-DmSans`}
    >
      {btn_name}
    </button>
  );
};

export default BtnPrimary;
