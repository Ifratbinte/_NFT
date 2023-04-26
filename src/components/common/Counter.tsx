import React from "react";
interface Props {
  point: string
  topic: string
}
const Counter: React.FC<Props> = ({point, topic}) => {
  return (
    <>
      <li className="w-1/3">
        <div className="lg:text-4xl sm:text-3xl text-2xl font-bold">{point}</div>
        <span className="text-md">{topic}</span>
      </li>
    </>
  );
};

export default Counter;
