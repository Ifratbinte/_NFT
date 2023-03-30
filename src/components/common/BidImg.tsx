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
  return <div className="flex items-center gap-7 lg:pb-10 pb-7 last:pb-0">
    <div>
      <img src={image} alt="" />
    </div>
    <div>
      <h4 className="text-xl font-bold mb-3">{author_name}</h4>
      <div className="flex items-center mb-4">
        <img src={author} alt={author_name} className="mr-3"/>
        <button className="flex items-center border border-1 text-sm border-green-500 text-green-500 rounded-md py-1 px-2 mr-3"><FaEthereum className="mr-1"/>{bid_amount}</button>
        <span className="text-sm text-paragraph">{stock}</span>
      </div>
      <button className="border-2 font-semibold border-primary hover:border-primary hover:bg-primary rounded-full text-primary px-4 py-2 transition-all hover:text-white">{btn}</button>
    </div>
  </div>;
};

export default BidImage;
