import CardInterface from "#/interface/card";
import React from "react";
import { FiClock, FiLayers, FiUsers } from "react-icons/fi";
import Star from "./stars";

const Card: React.FC<CardInterface> = ({ thumb, badge, title, desc, rating, total_rating, student, lecture, time, title_style = "text-sm" }) => {
  return (
    <>
      <div className="rounded-lg shadow-cardShadow">
        <div className="relative">
          <img src={thumb} alt={badge} />
          <span className="bg-slate-100 text-black absolute bottom-3 left-3 px-3 py-1 rounded text-sm">{badge}</span>
        </div>
        <div className="p-6">
          <div className={`${title_style} leading-relaxed font-bold mb-2`}>{title}</div>
          <p className="text-base text-base-color mb-3">{desc}</p>
          <div className="flex items-center">
            <div className="text-base-yellow flex items-center">
              <span className="font-semibold">{rating}</span>
              <Star number={2} />
            </div>
            <span className="text-base-color text-sm ml-2">{total_rating} ratings</span>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default Card;
