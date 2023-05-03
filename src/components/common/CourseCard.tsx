import React from "react";
import Star from "./stars";
import { FiLayers, FiClock } from "react-icons/fi";
interface Props {
  thumb: string
  badge: string
  title: string
  desc?: string
  rating: string
  total_rating: string
  total_stu?: string
  total_lec?: number
  time?:string
  title_style: string
}
const CourseCard: React.FC<Props> = ({ thumb, badge, title,desc, rating, total_rating, total_stu, total_lec, time, title_style="text-sm" }) => {
  return (
    <>
      <div className="rounded-lg shadow-cardShadow">
        <div className="relative">
          <img src={thumb} alt={badge}/>
          <span className="bg-slate-100 text-black absolute bottom-3 left-3 px-3 py-1 rounded text-sm">{badge}</span>
        </div>
        <div className="p-6 py-8">
          <div className={`${title_style} leading-relaxed font-bold mb-2`}>{title}</div>
          <p className="text-base text-base-color mb-3">{desc}</p>
          <div className="flex items-center mb-2">
            <div className="text-base-yellow flex items-center">
              <span className="font-semibold">{rating}</span>
              <Star number={2} />
            </div>
            <span className="text-base-color text-base ml-2">{total_rating} ratings</span>
          </div>
          <div className="text-base-color text-base mb-3">{total_stu} students</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <FiLayers/>
              <span className="text-base-color text-base ml-2">{total_lec} lectures</span>
            </div>
            <div className="flex items-center">
              <FiClock/>
              <span className="text-base-color text-base ml-2">{time}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
