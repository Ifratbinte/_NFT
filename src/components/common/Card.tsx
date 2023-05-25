import CardInterface from "#/interface/card";
import Button from "#components/button/btnPrimary";
import Link from "next/link";
import React from "react";
import { FiChevronRight, FiClock, FiLayers, FiUsers } from "react-icons/fi";
import Star from "./stars";

const Card: React.FC<CardInterface> = ({
  thumb,
  badge,
  btn,
  desc,
  rating,
  total_rating,
  student,
  lecture,
  time,
  title_style,
  isLarge,
  mentor,
  mentor_name,
  title = "text-sm",
}) => {
  return (
    <div className={`${isLarge ? "w-4/5" : "w-100"} mx-auto rounded-lg shadow-cardShadow`}>
      <div className={`${isLarge ? "flex-row gap-6" : "flex-col"} flex`}>
        <div className="relative basis-1/3">
          <img src={thumb} alt={badge} className="h-full" />
          <span className="bg-slate-100 text-black absolute bottom-3 left-3 px-3 py-1 rounded text-sm">{badge}</span>
        </div>
        <div className="p-6">
          <div className={`${isLarge ? "flex-row" : "flex-col"} flex`}>
            <div className={`${isLarge ? "w-2/3 mb-3" : "w-full"}`}>
              <div className={`${title_style} leading-relaxed font-bold mb-2`}>{title}</div>
              <p className="text-base text-base-color mb-3">{desc}</p>
            </div>
            <div className={`${isLarge ? "w-1/3" : "w-full"}`}>
              {rating && (
                <div className={`${isLarge ? "justify-end flex-col" : "flex-row items-center"} flex`}>
                  <div className={`${isLarge ? "justify-end mb-2" : ""} text-base-yellow flex items-center`}>
                    <span className="font-semibold">{rating}</span>
                    <Star number={2} />
                  </div>
                  <span className={`${isLarge ? "text-right" : ""} text-base-color text-sm ml-2`}>{total_rating} ratings</span>
                </div>
              )}
            </div>
          </div>

          {isLarge && (
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img src={mentor} alt={mentor_name} className="w-8 h-8"/>
                <h5 className="text-sm ml-3">{mentor_name}</h5>
              </div>
              <Button btn_name="View Details"  />
            </div>
          )}

          {student && (
            <div className="flex items-center">
              <FiUsers />
              <span className="text-base-color text-base my-3 ml-2">{student} students</span>
            </div>
          )}

          <div className="flex items-center gap-6">
            {lecture && (
              <div className="flex items-center">
                <FiLayers />
                <span className="text-base-color text-base ml-2">{lecture} lectures</span>
              </div>
            )}
            {time && (
              <div className="flex items-center">
                <FiClock />
                <span className="text-base-color text-base ml-2">{time}</span>
              </div>
            )}
          </div>
          {btn && (
            <Link href="#" className="flex items-center hover:text-sky-500 font-semibold transition-all">
              <span>{btn}</span>
              <FiChevronRight className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
