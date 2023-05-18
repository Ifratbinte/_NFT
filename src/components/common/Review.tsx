import React from "react";

interface Props {
  avatar: string;
  review: string;
  name: string;
  designation: string;
}

const Review: React.FC<Props> = ({ avatar, review, name, designation }) => {
  return (
    <figure className="relative md:flex bg-slate-100 border border-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-3">
      <img className="w-24 h-24 md:w-52 md:h-auto md:rounded rounded-full mx-auto md:p-8" src={avatar} alt={name} />
      <div className="pt-6 md:py-8 md-pr-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="md:text-base text-sm font-medium">{review}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{name}</div>
          <div className="text-slate-700 dark:text-slate-500">{designation}</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Review;
