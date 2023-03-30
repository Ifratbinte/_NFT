import React from "react";
import { FaEthereum } from "react-icons/fa";

interface Props {
  id: number;
  image: string;
  title: string;
  amount: string;
  in_sell?: string;
  de_sell?: string;
  verify_badge?: string;
  isVerify?: boolean;
}

const TopCollection: React.FC<Props> = ({ id, image, title, amount, verify_badge, in_sell, de_sell, isVerify }) => {
  return (
    <div className="flex items-center gap-6 relative py-4 last:pb-5  border-b last:border-b-0">
      <div className="text-2xl font-bold">{id}</div>
        <div>
          <img src={image} alt={title} className="relative" />
          {isVerify && <img src={verify_badge} alt="" className="absolute top-2 left-20" />}
        </div>
      <div className="ml-2">
        <h6 className="font-DmSans text-lg font-semibold text-black">{title}</h6>
        <span className="flex items-center text-sm text-slate-800 font-semibold mt-2 font-DmSans"><FaEthereum className="mr-1 text-xl"/>{amount}</span>
      </div>
      {in_sell && <div className="text-teal-300 text-lg md:text-xl font-bold font-DmSans absolute right-0">{in_sell}</div>}
      {de_sell && <div className="text-danger text-lg md:text-xl font-bold font-DmSans absolute right-0">{de_sell}</div>}
    </div>
  );
};

export default TopCollection;
