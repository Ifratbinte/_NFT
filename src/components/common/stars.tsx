import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  number: number;
}

const stars: React.FC<Props> = ({ number }) => {
  return (
    <div className="flex items-center ml-2">
      {[5, 4, 3, 2, 1].map((i) => {
        if (number <= i) {
          console.log("aa", i);
          return <FaStar className="mr-1 last:mr-0" />;
        } else {
          return <FaStarHalfAlt className="mr-1" />;
        }
      })}
    </div>
  );
};

export default stars;
