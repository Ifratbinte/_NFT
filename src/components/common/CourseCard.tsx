import React from "react";
import Star from "./stars";
interface Props {
  thumb: string;
  badge: string;
  title: string;
  rating: string;
  total_rating: string;
}
const CourseCard: React.FC<Props> = ({ thumb, badge, title, rating, total_rating }) => {
  return (
    <>
      <div className="border">
        <div className="relative">
          <img src={thumb} alt={badge}/>
          <span className="bg-slate-100 text-black absolute bottom-3 left-3 px-3 py-1 rounded text-sm">{badge}</span>
        </div>
        <div className="p-5">
          <div className="text-sm font-bold mb-2">{title}</div>
          <div className="flex items-center">
            <div className="text-base-yellow flex items-center">
              <span className="font-semibold">{rating}</span>
              <Star number={2} />
            </div>
            <span className="text-slate-800 text-sm ml-2">{total_rating} ratings</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
