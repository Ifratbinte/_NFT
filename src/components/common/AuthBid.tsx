import React from "react";
interface Props {
  author: string;
  author_name: string;
  stock?: string;
  bid_title?: string;
  bid_amount?: string;
}

const AuthBid: React.FC<Props> = ({ author, author_name, stock, bid_title, bid_amount}) => {
  return (
    <div className="flex justify-between items-center mt-6 px-3 lg:mr-9 sm:w-2/3 mx-auto sm:pr-6 md:w-full md:pr-9">
      <div className="flex items-center">
        <div className="mr-2">
          <img src={author} alt={author_name} className="" />
        </div>
        <div>
          <h5 className="text-lg font-semibold font-DmSans">{author_name}</h5>
          <span className="text-sm">{stock}</span>
        </div>
      </div>
      <div>
        <div className="text-sm font-DmSans font-semibold mb-1">{bid_title}</div>
        <span className="text-md font-semibold font-DmSans">{bid_amount}</span>
      </div>
      
    </div>
  );
};

export default AuthBid;
