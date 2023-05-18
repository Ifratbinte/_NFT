import React from "react";
interface Props {
  avatar: string;
  name: string;
  designation: string;
}

const MentorCard: React.FC<Props> = ({ avatar, name, designation }) => {
  return (
    <div className="rounded-xl p-6 cursor-pointer hover:shadow-cardShadow mx-4 my-8 border border-slate-100">
      <img className="w-32 h-32 md:w-44 md:h-44 rounded-full mx-auto " src={avatar} alt={name} />
      <div className="text-center">
        <div className="text-xl font-semibold mt-5 mb-1">{name}</div>
        <div className="text-base text-slate-500">{designation}</div>
      </div>
    </div>
  );
};

export default MentorCard;
