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
    <div className="flex flex-col lg:w-1/3">
      <div className="flex gap-2 mb-5 lg:w-1/3">
          <img src={feat_lg} alt="" />
        <ul>
          {feat_sm.map((item_sm: any, i: number) => {
            return (
              <li className="pb-2">
                <img src={item_sm.img} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h4 className="text-2xl">{title}</h4>
        <div className="flex justify-between items-center mt-6 px-3 mr-9">
          <div className="flex items-center">
            <img src={author} alt={author_name} className="mr-2" />
            <h5 className="text-md font-DmSans font-bold">{author_name}</h5>
          </div>
          <button className="rounded-full border-primary border-1">{btn}</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
