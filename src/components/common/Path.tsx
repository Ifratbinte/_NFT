import React from "react";
import style from "#styles/animation.module.css"

interface PathInterface {
  icon?: string;
  title: string;
}

const Path: React.FC<PathInterface> = ({ icon, title }) => {
  return (
    <li className={`${style.animation} path relative flex items-center justify-center font-semibold h-[215px] w-[230px] shadow-cardShadow bg-white hover:bg-slate-100 text-black hover:text-gray-700 rounded-full xl:mx-12 nn lg:mx-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer`}>
      <div className="rounded-full bg-gray-50 border border-slate-50 hover:shadow-cardShadow hover:bg-slate-300 h-[185px] w-[190px] flex flex-col justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300 ">
        <img src={icon} alt="" />
        <h5 className="text-center p-3">{title}</h5>
      </div>
    </li>
  );
};

export default Path;
