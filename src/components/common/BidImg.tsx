import React from "react";
import { FaEthereum } from "react-icons/fa";
interface Props {
  image: string;
  author_name: string;
  author: string;
  bid_amount: string;
  stock: string;
  btn: string;
}

const BidImage: React.FC<Props> = ({image, author, author_name, stock, bid_amount, btn }) => {
  return <div className="flex items-center gap-4 xl:gap-7 xl:pb-10 md:pb-6 pb-4 last:pb-0">
    <div>
      <img src={image} alt="" />
    </div>
    <div>
      <h4 className="text-md lg:text-lg xl:text-xl font-bold mb-2 xl:mb-3">{author_name}</h4>
      <div className="flex items-center xl:mb-4 mb-2">
        <img src={author} alt={author_name} className="xl:mr-3 mr-2"/>
        <button className="flex items-center border border-1 text-xs xl:text-sm border-green-500 text-green-500 rounded-md py-1 px-1 xl:px-2 mr-1 xl:mr-3"><FaEthereum className=""/>{bid_amount}</button>
        <span className="text-sm text-paragraph xl:block hidden">{stock}</span>
      </div>
      <button className="border-2 font-semibold border-primary hover:border-primary hover:bg-primary rounded-full text-primary text-sm xl:px-4 px-3 xl:py-2 py-1 transition-all hover:text-white">{btn}</button>
      <span className="text-sm text-paragraph xl:hidden block mt-2">{stock}</span>
    </div>
  </div>;
};

export default BidImage;
