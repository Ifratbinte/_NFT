import React from "react";
interface Props {
  point: string;
  topic: string;
}
const CounterTemp: React.FC<Props> = ({ point, topic }) => {
  return (
    <div className="">
      <div className="lg:text-2xl sm:text-xl text-lg font-bold text-white mb-4">{point}</div>
      <span className="sm:text-md text-sm text-slate-100">{topic}</span>
    </div>
  );
};

export default CounterTemp;
