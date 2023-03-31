import React from "react";
interface Props {
  title: string;
  author: string;
  author_name: string;
  btn: string;
  feat_lg: string;
  feat_sm: [];
}

const Feature: React.FC<Props> = ({ title, author, author_name, btn, feat_lg, feat_sm }) => {
  console.log({ feat_sm });

  return (
    <div className="flex lg:flex-col items-center md:items-start">
      <div className="flex gap-2 mb-5">
        <div><img src={feat_lg} alt=""/></div>
        <div>
          {feat_sm.map((item_sm: any, i: number) => 
            <div className="pb-2">
              <img key={i} src={item_sm.img} alt=""/>
            </div>
          )}
        </div>
      </div>
      <div className="w-2/3 sm:w-1/2 md:w-full">
        <h4 className="text-xl font-bold font-DmSans">{title}</h4>
        <div className="flex justify-between items-center mt-3 lg:mr-16">
          <div className="flex items-center">
            <img src={author} alt={author_name} className="mr-2" />
            <h5 className="text-md font-DmSans font-bold pl-2">by {author_name}</h5>
          </div>
          <button className="rounded-full border-blue hover:border-primary border border-1 text-blue hover:text-white hover:bg-primary font-DmSans font-semibold text-sm px-3 py-2">{btn}</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
