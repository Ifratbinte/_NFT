import React from "react";

interface Props {
  avatar: string;
  review: string;
  name: string;
  designation: string;
}

const Review: React.FC<Props> = ({ avatar, review, name, designation }) => {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={avatar} alt={name} />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
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
