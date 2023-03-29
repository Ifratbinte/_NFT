import React from "react";

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
          {/* {isVerify && <img src={verify_badge} alt="" className="absolute" />} */}
        </div>
      <div>
        <h6 className="font-DmSans text-lg font-semibold text-black">{title}</h6>
        <span className="text-sm text-slate-800 font-semibold">{amount}</span>
      </div>
      {/* <div className={`${in_sell ? "text-teal-300" : "text-red-600"}text-xl font-bold font-DmSans`}>{in_sell}</div> */}
      {in_sell && <div className="text-teal-300 text-xl font-bold font-DmSans absolute right-0">{in_sell}</div>}
      {de_sell && <div className="text-danger text-xl font-bold font-DmSans absolute right-0">{de_sell}</div>}
    </div>
  );
};

export default TopCollection;
