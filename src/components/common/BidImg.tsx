import React from "react";
interface Props {
  image: string;
  author_name: string;
  author: string;
  bid_amount: string;
  stock: string;
  btn: string;
}

const BidImage: React.FC<Props> = ({ author, author_name, stock, bid_amount, btn }) => {
  return <div className="flex justify-between items-center"></div>;
};

export default BidImage;
